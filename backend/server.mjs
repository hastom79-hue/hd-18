import http from 'node:http';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const __dirname=path.dirname(fileURLToPath(import.meta.url));
const dataDir=path.join(__dirname,'data');
const storeFile=path.join(dataDir,'runtime.json');
fs.mkdirSync(dataDir,{recursive:true});

const PORT=Number(process.env.PORT||8787);
const TOKEN_SECRET=process.env.TOKEN_SECRET||'';
const MASTER_NAME=(process.env.MASTER_NAME||'').trim();
const DEFAULT_SALT=process.env.MASTER_CODE_SALT||'';
const DEFAULT_HASH=process.env.MASTER_CODE_HASH||'';

function load(){
  if(!fs.existsSync(storeFile)) return {credential:null,access:[]};
  try{return JSON.parse(fs.readFileSync(storeFile,'utf8'))}catch{return {credential:null,access:[]}}
}
function save(s){fs.writeFileSync(storeFile,JSON.stringify(s,null,2))}
function body(req){return new Promise((resolve,reject)=>{let s='';req.on('data',c=>{s+=c;if(s.length>1e6)req.destroy()});req.on('end',()=>{try{resolve(s?JSON.parse(s):{})}catch(reject)});req.on('error',reject)})}
function json(res,status,payload){res.writeHead(status,{'Content-Type':'application/json; charset=utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type, Authorization','Access-Control-Allow-Methods':'GET,POST,OPTIONS'});res.end(JSON.stringify(payload))}
function hashCode(code,salt){return crypto.pbkdf2Sync(String(code),Buffer.from(salt,'base64'),310000,32,'sha256').toString('base64')}
function timingEqual(a,b){try{return crypto.timingSafeEqual(Buffer.from(a),Buffer.from(b))}catch{return false}}
function credential(){const s=load();if(s.credential?.salt&&s.credential?.hash)return s.credential;if(DEFAULT_SALT&&DEFAULT_HASH)return {salt:DEFAULT_SALT,hash:DEFAULT_HASH};return null}
function sign(payload){if(!TOKEN_SECRET) throw new Error('TOKEN_SECRET is not configured');const exp=Date.now()+8*60*60*1000;const data=Buffer.from(JSON.stringify({...payload,exp})).toString('base64url');const sig=crypto.createHmac('sha256',TOKEN_SECRET).update(data).digest('base64url');return `${data}.${sig}`}
function verifyToken(req){const raw=(req.headers.authorization||'').replace(/^Bearer\s+/i,'');const [data,sig]=raw.split('.');if(!data||!sig||!TOKEN_SECRET)return null;const expected=crypto.createHmac('sha256',TOKEN_SECRET).update(data).digest('base64url');if(!timingEqual(sig,expected))return null;try{const p=JSON.parse(Buffer.from(data,'base64url').toString('utf8'));return p.exp>Date.now()?p:null}catch{return null}}
function unique(records,from){return new Set(records.filter(r=>new Date(r.at)>=from).map(r=>r.userKey)).size}
function utilization(records,headcount,from){const u=unique(records,from);return headcount?Math.round((u/headcount)*1000)/10:0}

const server=http.createServer(async(req,res)=>{
  if(req.method==='OPTIONS') return json(res,204,{});
  const u=new URL(req.url,'http://localhost');
  try{
    if(req.method==='GET'&&u.pathname==='/api/health') return json(res,200,{ok:true,mode:'prototype'});
    if(req.method==='GET'&&u.pathname==='/api/me') return json(res,200,{authenticated:false,role:'anonymous'});
    if(req.method==='POST'&&u.pathname==='/api/access'){
      const p=await body(req);const s=load();const now=new Date().toISOString();const userKey=String(p.userKey||req.socket.remoteAddress||crypto.randomUUID());s.access.push({at:now,userKey,event:p.event||'page_view',edition:p.edition||null,plant:p.plant||null,department:p.department||null});if(s.access.length>100000)s.access=s.access.slice(-100000);save(s);return json(res,201,{ok:true,totalVisits:s.access.length,totalReaders:new Set(s.access.map(r=>r.userKey)).size});
    }
    if(req.method==='POST'&&u.pathname==='/api/master/login'){
      const p=await body(req);const c=credential();if(!c||!MASTER_NAME||!TOKEN_SECRET)return json(res,503,{ok:false,error:'MASTER backend is not configured'});const okName=String(p.name||'').trim().toLowerCase()===MASTER_NAME.toLowerCase();const okCode=timingEqual(hashCode(p.code||'',c.salt),c.hash);if(!okName||!okCode)return json(res,401,{ok:false,error:'Invalid credentials'});return json(res,200,{ok:true,token:sign({role:'master',name:MASTER_NAME})});
    }
    if(req.method==='POST'&&u.pathname==='/api/master/change-code'){
      const token=verifyToken(req);if(token?.role!=='master')return json(res,401,{ok:false,error:'Unauthorized'});const p=await body(req);const c=credential();if(!c||!timingEqual(hashCode(p.currentCode||'',c.salt),c.hash))return json(res,401,{ok:false,error:'Current code mismatch'});if(!/^\d{6,12}$/.test(String(p.newCode||'')))return json(res,400,{ok:false,error:'New code must be 6-12 digits'});const salt=crypto.randomBytes(16).toString('base64');const s=load();s.credential={salt,hash:hashCode(p.newCode,salt),updatedAt:new Date().toISOString()};save(s);return json(res,200,{ok:true});
    }
    if(req.method==='GET'&&u.pathname==='/api/analytics'){
      const token=verifyToken(req);if(token?.role!=='master')return json(res,401,{ok:false,error:'Unauthorized'});const s=load();const now=new Date();const d0=new Date(now);d0.setHours(0,0,0,0);const m0=new Date(now.getFullYear(),now.getMonth(),1);const y0=new Date(now.getFullYear(),0,1);const monthUnique=unique(s.access,m0);return json(res,200,{todayUnique:unique(s.access,d0),monthUnique,yearUnique:unique(s.access,y0),monthVisits:s.access.filter(r=>new Date(r.at)>=m0).length,utilization:utilization(s.access,Number(process.env.TOTAL_HEADCOUNT||0),m0),generatedAt:now.toISOString()});
    }
    return json(res,404,{ok:false,error:'Not found'});
  }catch(e){return json(res,500,{ok:false,error:'Server error'});}
});
server.listen(PORT,()=>console.log(`HDPS dynamic API listening on :${PORT}`));
