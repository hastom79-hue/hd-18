(()=>{
  if(window.__hd18Security)return; window.__hd18Security=true;
  const css=`
    html,body{-webkit-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}
    img{-webkit-user-drag:none!important;user-drag:none!important}
    #hd18-security-watermark{position:fixed;inset:0;z-index:2147483000;pointer-events:none;overflow:hidden;opacity:.095;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='220' viewBox='0 0 420 220'%3E%3Cg transform='rotate(-24 210 110)'%3E%3Ctext x='35' y='95' fill='%23ffffff' font-family='Arial' font-size='15' font-weight='700' letter-spacing='2'%3ECONFIDENTIAL · INTERNAL USE ONLY%3C/text%3E%3Ctext x='96' y='122' fill='%23ffffff' font-family='Arial' font-size='12'%3E%C2%A9 2026 SEO JI-CHEOL%3C/text%3E%3C/g%3E%3C/svg%3E");background-repeat:repeat}
    #hd18-security-shield{position:fixed;inset:0;z-index:2147483646;display:none;place-items:center;background:#070b12;color:#fff;text-align:center;font-family:Arial,sans-serif;padding:28px}
    #hd18-security-shield.show{display:grid}
    #hd18-security-shield strong{display:block;font-size:28px;margin-bottom:10px;letter-spacing:-.03em}
    #hd18-security-shield p{margin:0;color:#aab4bf;font-size:13px;line-height:1.7}
    @media print{body>*{display:none!important}body:after{content:'CONFIDENTIAL — PRINTING PROHIBITED';display:grid!important;place-items:center;min-height:100vh;color:#000;font:700 24px Arial,sans-serif}}
  `;
  const style=document.createElement('style');style.id='hd18-security-style';style.textContent=css;document.head.appendChild(style);
  const wm=document.createElement('div');wm.id='hd18-security-watermark';wm.setAttribute('aria-hidden','true');document.body.appendChild(wm);
  const shield=document.createElement('div');shield.id='hd18-security-shield';shield.innerHTML='<div><strong>보안 보호 화면</strong><p>이 자료는 CONFIDENTIAL 콘텐츠입니다.<br>화면 캡처·인쇄·무단 복제 및 배포가 금지되어 있습니다.</p></div>';document.body.appendChild(shield);
  let timer=null;
  const protect=()=>{shield.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>shield.classList.remove('show'),2200)};
  document.addEventListener('contextmenu',e=>e.preventDefault(),{capture:true});
  document.addEventListener('dragstart',e=>e.preventDefault(),{capture:true});
  document.addEventListener('copy',e=>e.preventDefault(),{capture:true});
  document.addEventListener('cut',e=>e.preventDefault(),{capture:true});
  document.addEventListener('selectstart',e=>{if(!e.target.closest('input,textarea'))e.preventDefault()},{capture:true});
  document.addEventListener('keydown',e=>{
    const k=(e.key||'').toLowerCase();
    if(k==='printscreen'){e.preventDefault();protect()}
    if((e.ctrlKey||e.metaKey)&&['p','s','u'].includes(k)){e.preventDefault();protect()}
    if((e.ctrlKey||e.metaKey)&&e.shiftKey&&['s','i','j','c'].includes(k)){e.preventDefault();protect()}
    if(e.key==='F12'){e.preventDefault();protect()}
  },{capture:true});
  window.addEventListener('beforeprint',e=>protect());
  document.addEventListener('visibilitychange',()=>{if(document.hidden)shield.classList.add('show');else setTimeout(()=>shield.classList.remove('show'),250)});
})();