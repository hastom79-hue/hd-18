(()=>{
  const cfg=()=>window.HDPS_CONFIG||{};
  const base=()=>String(cfg().apiBaseUrl||'').replace(/\/$/,'');
  async function req(path,options={}){
    if(!base()) return null;
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),Number(cfg().apiTimeoutMs)||5000);
    try{
      const token=sessionStorage.getItem('hdps_master_token');
      const headers={'Content-Type':'application/json',...(options.headers||{})};
      if(token) headers.Authorization=`Bearer ${token}`;
      const r=await fetch(base()+path,{...options,headers,signal:controller.signal});
      if(!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } finally { clearTimeout(timer); }
  }
  window.HDPS_API={
    enabled:()=>!!base(),
    me:()=>req('/api/me'),
    logAccess:(payload={})=>req('/api/access',{method:'POST',body:JSON.stringify(payload)}),
    masterLogin:async(name,code)=>{
      const out=await req('/api/master/login',{method:'POST',body:JSON.stringify({name,code})});
      if(out?.token) sessionStorage.setItem('hdps_master_token',out.token);
      return out;
    },
    analytics:()=>req('/api/analytics'),
    changeMasterCode:(currentCode,newCode)=>req('/api/master/change-code',{method:'POST',body:JSON.stringify({currentCode,newCode})}),
    logout:()=>sessionStorage.removeItem('hdps_master_token')
  };
})();
