window.HDPS_CONFIG = Object.freeze({
  // Leave blank while the site runs as GitHub Pages-only.
  // When the dynamic API is deployed, set e.g. https://hdps-api.company.com
  apiBaseUrl: "",
  backendMode: "static-fallback",
  apiTimeoutMs: 5000
});

/* Global language edition switcher — applies only inside the four book editions. */
(()=>{
  const pathname=location.pathname;
  const match=pathname.match(/\/(ko|en|pt-BR|zh-CN)(?:\/index\.html)?\/?$/i);
  if(!match) return;
  const raw=match[1].toLowerCase();
  const current=raw==='pt-br'?'pt-BR':raw==='zh-cn'?'zh-CN':raw;
  const base=pathname.replace(/(ko|en|pt-BR|zh-CN)(?:\/index\.html)?\/?$/i,'');
  const editions=[
    ['ko','한국어'],
    ['en','English'],
    ['pt-BR','Português'],
    ['zh-CN','简体中文']
  ];

  const mount=()=>{
    if(document.getElementById('hdps-global-language-switch')) return;
    const style=document.createElement('style');
    style.id='hdps-global-language-switch-style';
    style.textContent=`
      #hdps-global-language-switch{position:fixed;z-index:2147483200;top:max(9px,env(safe-area-inset-top));right:max(14px,env(safe-area-inset-right));display:flex;align-items:center;gap:4px;padding:5px;border:1px solid rgba(0,34,97,.13);border-radius:999px;background:rgba(255,255,255,.94);box-shadow:0 10px 30px rgba(0,34,97,.16);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
      #hdps-global-language-switch a{display:inline-flex;align-items:center;justify-content:center;min-height:31px;padding:0 10px;border-radius:999px;color:#596774!important;text-decoration:none!important;font-family:Inter,'Nanum Gothic',Arial,sans-serif;font-size:9.5px;font-weight:900;line-height:1;white-space:nowrap;transition:background .2s,color .2s,transform .2s}
      #hdps-global-language-switch a:hover{background:#edf4f7;color:#002261!important;transform:translateY(-1px)}
      #hdps-global-language-switch a.active{background:linear-gradient(135deg,#002261,#0b735d);color:#fff!important;box-shadow:0 6px 16px rgba(0,34,97,.20)}
      body.hdps-lang-enabled .topbar{padding-right:320px!important;justify-content:flex-start!important}
      @media(max-width:1180px){body.hdps-lang-enabled .topbar{padding-right:285px!important}.topnav{gap:16px!important}#hdps-global-language-switch a{padding:0 8px;font-size:9px}}
      @media(max-width:840px){#hdps-global-language-switch{right:8px;gap:2px;padding:4px}#hdps-global-language-switch a{min-height:29px;padding:0 7px;font-size:8.5px}body.hdps-lang-enabled .topbar{padding-right:0!important}}
      @media(max-width:520px){#hdps-global-language-switch{left:8px;right:8px;justify-content:center}#hdps-global-language-switch a{flex:1;max-width:92px;padding:0 4px}}
    `;
    document.head.appendChild(style);
    document.body.classList.add('hdps-lang-enabled');
    const nav=document.createElement('nav');
    nav.id='hdps-global-language-switch';
    nav.setAttribute('aria-label','Language edition');
    nav.innerHTML=editions.map(([code,label])=>`<a href="${base}${code}/" lang="${code}"${code===current?' class="active" aria-current="page"':''}>${label}</a>`).join('');
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',e=>{
      const hash=location.hash;
      if(!hash) return;
      e.preventDefault();
      location.href=a.getAttribute('href')+hash;
    }));
    document.body.appendChild(nav);
  };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',mount,{once:true}):mount();
})();
