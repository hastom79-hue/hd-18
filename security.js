(()=>{
  if(window.__hd18Security)return; window.__hd18Security=true;

  const style=document.createElement('style');
  style.id='hd18-security-style';
  style.textContent=`
    html,body{-webkit-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}
    img{-webkit-user-drag:none!important;user-drag:none!important}
    .headline-mark{position:relative!important;display:inline!important;box-decoration-break:clone!important;-webkit-box-decoration-break:clone!important;padding:0 .035em!important;background:linear-gradient(to bottom,transparent 61%,rgba(0,166,81,.30) 61%,rgba(38,186,108,.30) 93%,transparent 93%)!important}
    .headline-mark:after{content:none!important;display:none!important}
    #hd18-security-watermark{position:fixed;inset:0;z-index:2147483000;pointer-events:none;opacity:.085;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='220' viewBox='0 0 420 220'%3E%3Cg transform='rotate(-24 210 110)'%3E%3Ctext x='35' y='95' fill='%23ffffff' font-family='Arial' font-size='15' font-weight='700' letter-spacing='2'%3ECONFIDENTIAL · INTERNAL USE ONLY%3C/text%3E%3Ctext x='96' y='122' fill='%23ffffff' font-family='Arial' font-size='12'%3E%C2%A9 2026 SEO JI-CHEOL%3C/text%3E%3C/g%3E%3C/svg%3E");background-repeat:repeat}
    #hd18-security-shield{position:fixed;inset:0;z-index:2147483646;display:none;place-items:center;background:#070b12;color:#fff;text-align:center;font-family:Arial,sans-serif;padding:28px}
    #hd18-security-shield.show{display:grid}
    #hd18-security-shield strong{display:block;font-size:28px;margin-bottom:10px}
    #hd18-security-shield p{margin:0;color:#aab4bf;font-size:13px;line-height:1.7}
    @media print{body>*{display:none!important}body:after{content:'CONFIDENTIAL — PRINTING PROHIBITED';display:grid!important;place-items:center;min-height:100vh;color:#000;font:700 24px Arial,sans-serif}}
  `;
  document.head.appendChild(style);

  const FLAGS={
    Korea:`<svg class="flag-svg" viewBox="0 0 72 48" aria-label="Korea" role="img"><rect width="72" height="48" rx="2" fill="#fff"/>
      <g transform="translate(36 24)"><path d="M0-10a10 10 0 1 1 0 20a5 5 0 1 0 0-10a5 5 0 1 1 0-10z" fill="#cd2e3a"/><path d="M0 10a10 10 0 1 1 0-20a5 5 0 1 0 0 10a5 5 0 1 1 0 10z" fill="#0047a0"/></g>
      <g fill="#111"><g transform="translate(13 10) rotate(-33)"><rect x="-8" y="-5" width="16" height="2.5"/><rect x="-8" y="-.8" width="16" height="2.5"/><rect x="-8" y="3.4" width="16" height="2.5"/></g>
      <g transform="translate(59 38) rotate(-33)"><path d="M-8-5h6v2.5h-6zm10 0h6v2.5H2zM-8-.8h6v2.5h-6zm10 0h6v2.5H2zM-8 3.4h6v2.5h-6zm10 0h6v2.5H2z"/></g>
      <g transform="translate(59 10) rotate(33)"><path d="M-8-5h6v2.5h-6zm10 0h6v2.5H2z"/><rect x="-8" y="-.8" width="16" height="2.5"/><path d="M-8 3.4h6v2.5h-6zm10 0h6v2.5H2z"/></g>
      <g transform="translate(13 38) rotate(33)"><rect x="-8" y="-5" width="16" height="2.5"/><path d="M-8-.8h6v2.5h-6zm10 0h6v2.5H2z"/><rect x="-8" y="3.4" width="16" height="2.5"/></g></g></svg>`,
    India:`<svg class="flag-svg" viewBox="0 0 72 48" aria-label="India" role="img"><rect width="72" height="16" fill="#ff9933"/><rect y="16" width="72" height="16" fill="#fff"/><rect y="32" width="72" height="16" fill="#138808"/><circle cx="36" cy="24" r="5.5" fill="none" stroke="#000080" stroke-width="1.2"/><g stroke="#000080" stroke-width=".65">${Array.from({length:12},(_,i)=>`<line x1="36" y1="18.5" x2="36" y2="29.5" transform="rotate(${i*15} 36 24)"/>`).join('')}</g><circle cx="36" cy="24" r="1" fill="#000080"/></svg>`,
    Brazil:`<svg class="flag-svg" viewBox="0 0 72 48" aria-label="Brazil" role="img"><rect width="72" height="48" fill="#009b3a"/><path d="M36 5l27 19-27 19L9 24z" fill="#ffdf00"/><circle cx="36" cy="24" r="9.2" fill="#002776"/><path d="M27.5 22.5c6.8-3.2 13.5-2.6 18.5 1" fill="none" stroke="#fff" stroke-width="1.2"/></svg>`,
    Norway:`<svg class="flag-svg" viewBox="0 0 72 48" aria-label="Norway" role="img"><rect width="72" height="48" fill="#ba0c2f"/><rect x="18" width="9" height="48" fill="#fff"/><rect y="19.5" width="72" height="9" fill="#fff"/><rect x="21" width="3" height="48" fill="#00205b"/><rect y="22.5" width="72" height="3" fill="#00205b"/></svg>`,
    China:`<svg class="flag-svg" viewBox="0 0 72 48" aria-label="China" role="img"><rect width="72" height="48" fill="#de2910"/><g fill="#ffde00"><path d="M13 7l1.6 4.8h5l-4 2.9 1.5 4.8-4.1-3-4.1 3 1.6-4.8-4.1-2.9h5z"/><circle cx="25" cy="8" r="1.7"/><circle cx="29" cy="13" r="1.7"/><circle cx="29" cy="20" r="1.7"/><circle cx="24" cy="24" r="1.7"/></g></svg>`
  };

  function fixFlags(){
    document.querySelectorAll('svg.flag-svg[aria-label]').forEach(el=>{
      const label=el.getAttribute('aria-label');
      if(!FLAGS[label])return;
      if(el.dataset.hd18Accurate==='1')return;
      const wrap=document.createElement('div'); wrap.innerHTML=FLAGS[label].trim();
      const replacement=wrap.firstElementChild; replacement.dataset.hd18Accurate='1';
      el.replaceWith(replacement);
    });
  }

  const wm=document.createElement('div'); wm.id='hd18-security-watermark'; wm.setAttribute('aria-hidden','true'); document.body.appendChild(wm);
  const shield=document.createElement('div'); shield.id='hd18-security-shield'; shield.innerHTML='<div><strong>보안 보호 화면</strong><p>이 자료는 CONFIDENTIAL 콘텐츠입니다.<br>화면 캡처·인쇄·무단 복제 및 배포가 금지되어 있습니다.</p></div>'; document.body.appendChild(shield);
  let timer=null; const protect=()=>{shield.classList.add('show');clearTimeout(timer);timer=setTimeout(()=>shield.classList.remove('show'),2200)};

  document.addEventListener('contextmenu',e=>e.preventDefault(),true);
  document.addEventListener('dragstart',e=>e.preventDefault(),true);
  document.addEventListener('copy',e=>e.preventDefault(),true);
  document.addEventListener('cut',e=>e.preventDefault(),true);
  document.addEventListener('selectstart',e=>{if(!e.target.closest('input,textarea'))e.preventDefault()},true);
  document.addEventListener('keydown',e=>{const k=(e.key||'').toLowerCase();if(k==='printscreen'){e.preventDefault();protect()}if((e.ctrlKey||e.metaKey)&&['p','s','u'].includes(k)){e.preventDefault();protect()}if((e.ctrlKey||e.metaKey)&&e.shiftKey&&['s','i','j','c'].includes(k)){e.preventDefault();protect()}if(e.key==='F12'){e.preventDefault();protect()}},true);
  window.addEventListener('beforeprint',protect);

  const boot=()=>{fixFlags();const mo=new MutationObserver(fixFlags);mo.observe(document.documentElement,{subtree:true,childList:true});};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();