(()=>{
  if(window.__hd18Security)return; window.__hd18Security=true;
  const css=`
    html,body{-webkit-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}
    img{-webkit-user-drag:none!important;user-drag:none!important}

    /* Same green marker treatment for the key headline phrase in every language */
    .headline-mark{
      position:relative!important;
      display:inline!important;
      box-decoration-break:clone!important;
      -webkit-box-decoration-break:clone!important;
      padding:0 .035em!important;
      background:linear-gradient(to bottom,transparent 61%,rgba(0,166,81,.30) 61%,rgba(38,186,108,.30) 93%,transparent 93%)!important;
    }
    .headline-mark:after{content:none!important;display:none!important}

    #hd18-security-watermark{position:fixed;inset:0;z-index:2147483000;pointer-events:none;overflow:hidden;opacity:.095;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='420' height='220' viewBox='0 0 420 220'%3E%3Cg transform='rotate(-24 210 110)'%3E%3Ctext x='35' y='95' fill='%23ffffff' font-family='Arial' font-size='15' font-weight='700' letter-spacing='2'%3ECONFIDENTIAL · INTERNAL USE ONLY%3C/text%3E%3Ctext x='96' y='122' fill='%23ffffff' font-family='Arial' font-size='12'%3E%C2%A9 2026 SEO JI-CHEOL%3C/text%3E%3C/g%3E%3C/svg%3E");background-repeat:repeat}
    #hd18-security-shield{position:fixed;inset:0;z-index:2147483646;display:none;place-items:center;background:#070b12;color:#fff;text-align:center;font-family:Arial,sans-serif;padding:28px}
    #hd18-security-shield.show{display:grid}
    #hd18-security-shield strong{display:block;font-size:28px;margin-bottom:10px;letter-spacing:-.03em}
    #hd18-security-shield p{margin:0;color:#aab4bf;font-size:13px;line-height:1.7}

    /* Welcome / language gate — board-game property-card style */
    #languageGate.hd18-welcome{padding:clamp(18px,3vw,38px)!important;background:radial-gradient(circle at 18% 16%,rgba(29,84,136,.28),transparent 30%),radial-gradient(circle at 84% 82%,rgba(0,166,81,.12),transparent 28%),linear-gradient(135deg,#070a10,#0c121b 58%,#09121a)!important;overflow:auto!important}
    #languageGate.hd18-welcome .hd18-welcome-shell{width:min(1180px,96vw);min-height:min(720px,92vh);display:grid;grid-template-columns:1.04fr .96fr;border:1px solid rgba(255,255,255,.11);border-radius:30px;overflow:hidden;background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018));box-shadow:0 48px 120px rgba(0,0,0,.58);position:relative}
    #languageGate.hd18-welcome .hd18-welcome-shell:after{content:'HDPS';position:absolute;left:-28px;bottom:-34px;font:900 clamp(130px,18vw,260px)/.8 Arial,sans-serif;letter-spacing:-.09em;color:rgba(255,255,255,.025);pointer-events:none}
    #languageGate.hd18-welcome .hd18-intro{padding:clamp(34px,5vw,66px);display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid rgba(255,255,255,.09);position:relative;z-index:2}
    #languageGate.hd18-welcome .hd18-intro-top{display:flex;align-items:center;gap:13px}
    #languageGate.hd18-welcome .hd18-intro-mark{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(145deg,#173f70,#0d6b53);font:900 11px Arial,sans-serif;box-shadow:0 12px 30px rgba(0,0,0,.3)}
    #languageGate.hd18-welcome .hd18-intro-top strong{display:block;font-size:12px;letter-spacing:.15em}.hd18-intro-top small{display:block;margin-top:4px;color:#7f8a96;font-size:9px;letter-spacing:.09em}
    #languageGate.hd18-welcome .hd18-kicker{margin-top:52px;color:#d8b46c;font-size:9px;letter-spacing:.23em;font-weight:900}
    #languageGate.hd18-welcome h2{margin:14px 0 18px;font-size:clamp(38px,5vw,66px);line-height:.97;letter-spacing:-.06em;text-align:left!important}
    #languageGate.hd18-welcome h2 em{font-style:normal;color:#f0d99d}
    #languageGate.hd18-welcome .hd18-desc{max-width:620px;color:#99a4af;font-size:13px;line-height:1.82;margin:0!important;text-align:left!important}
    #languageGate.hd18-welcome .hd18-meta{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:28px}
    #languageGate.hd18-welcome .hd18-meta div{padding:13px;border:1px solid rgba(255,255,255,.08);border-radius:13px;background:rgba(255,255,255,.025)}
    #languageGate.hd18-welcome .hd18-meta span{display:block;color:#6f7b87;font-size:7px;letter-spacing:.1em}.hd18-meta strong{display:block;margin-top:5px;font-size:9px;line-height:1.45}
    #languageGate.hd18-welcome .hd18-secure{margin-top:26px;padding-top:17px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;gap:9px;color:#d6c08b;font-size:8px;font-weight:900;letter-spacing:.08em}.hd18-secure i{width:7px;height:7px;border-radius:50%;background:#d8b46c;box-shadow:0 0 12px rgba(216,180,108,.6)}
    #languageGate.hd18-welcome .hd18-choose{padding:clamp(30px,4vw,52px);display:flex;flex-direction:column;justify-content:center;position:relative;z-index:2}
    #languageGate.hd18-welcome .hd18-choose-label{font-size:9px;letter-spacing:.17em;color:#7d8894;font-weight:900}.hd18-choose h3{margin:9px 0 7px;font-size:26px;letter-spacing:-.04em}.hd18-choose>p{margin:0 0 20px!important;color:#7f8a96!important;font-size:10px!important;text-align:left!important}
    #languageGate.hd18-welcome .hd18-editions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
    #languageGate.hd18-welcome .hd18-edition-card{position:relative;min-height:196px;padding:0;border:1px solid rgba(255,255,255,.11);border-radius:18px;background:#f5f1e7;color:#111923;overflow:hidden;cursor:pointer;text-align:left;box-shadow:0 15px 34px rgba(0,0,0,.22);transition:transform .25s cubic-bezier(.2,.8,.2,1),box-shadow .25s,border-color .25s}
    #languageGate.hd18-welcome .hd18-edition-card:hover{transform:translateY(-8px) rotate(-.6deg);box-shadow:0 28px 50px rgba(0,0,0,.34);border-color:rgba(78,211,151,.65)}
    #languageGate.hd18-welcome .hd18-card-head{min-height:60px;padding:12px 13px;display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,#0c315d,#0c6854);color:#fff;border-bottom:4px solid #d7b56d}
    #languageGate.hd18-welcome .hd18-card-vol{font-size:8px;letter-spacing:.14em;font-weight:900}.hd18-card-flags{font-size:24px;letter-spacing:2px;filter:drop-shadow(0 2px 2px rgba(0,0,0,.15))}
    #languageGate.hd18-welcome .hd18-card-body{padding:15px 14px 14px}.hd18-card-body b{display:block;font-size:18px;letter-spacing:-.03em;color:#0c2c52}.hd18-card-body>span{display:block;margin-top:3px;color:#6f7a84;font-size:9px}
    #languageGate.hd18-welcome .hd18-plant-label{margin-top:14px;padding-top:10px;border-top:1px solid #ddd7cb;color:#9a7a43;font-size:7px;letter-spacing:.12em;font-weight:900}.hd18-plants{display:block!important;margin-top:5px!important;color:#273440!important;font-size:10px!important;font-weight:900;line-height:1.45!important}
    #languageGate.hd18-welcome .hd18-card-foot{position:absolute;left:14px;right:14px;bottom:11px;display:flex;justify-content:space-between;align-items:center;color:#68737d;font-size:7px;font-weight:800}.hd18-card-foot i{font-style:normal;color:#0b7652;font-size:14px}
    #languageGate.hd18-welcome .hd18-note{margin-top:17px!important;padding-top:14px;border-top:1px solid rgba(255,255,255,.07);font-size:8px!important;line-height:1.55!important;color:#65717d!important;text-align:left!important}
    @media(max-width:900px){#languageGate.hd18-welcome .hd18-welcome-shell{grid-template-columns:1fr;min-height:auto}.hd18-intro{border-right:0!important;border-bottom:1px solid rgba(255,255,255,.09)}#languageGate.hd18-welcome .hd18-kicker{margin-top:34px}#languageGate.hd18-welcome h2{font-size:42px}.hd18-meta{grid-template-columns:1fr!important}}
    @media(max-width:560px){#languageGate.hd18-welcome{padding:10px!important}#languageGate.hd18-welcome .hd18-welcome-shell{width:100%;border-radius:22px}.hd18-intro,.hd18-choose{padding:24px 18px!important}#languageGate.hd18-welcome h2{font-size:35px}.hd18-editions{grid-template-columns:1fr!important}.hd18-edition-card{min-height:176px!important}}
    @media print{body>*{display:none!important}body:after{content:'CONFIDENTIAL — PRINTING PROHIBITED';display:grid!important;place-items:center;min-height:100vh;color:#000;font:700 24px Arial,sans-serif}}
  `;
  const style=document.createElement('style');style.id='hd18-security-style';style.textContent=css;document.head.appendChild(style);

  /* Transform only the root language gate. security.js runs before the page's gate listeners are attached. */
  const gate=document.getElementById('languageGate');
  if(gate){
    gate.classList.add('hd18-welcome');
    gate.innerHTML=`
      <div class="hd18-welcome-shell">
        <section class="hd18-intro">
          <div>
            <div class="hd18-intro-top"><span class="hd18-intro-mark">HDPS</span><div><strong>HDPS GLOBAL DIGITAL BROCHURE</strong><small>HD CONSTRUCTION EQUIPMENT · 2026 EDITION</small></div></div>
            <div class="hd18-kicker">GLOBAL PRODUCTION INNOVATION PUBLICATION</div>
            <h2>HDPS를 세계의 현장에<br><em>하나의 기준으로 연결합니다.</em></h2>
            <p class="hd18-desc">HD Construction Equipment의 생산혁신체계 HDPS를 소개하는 공식 디지털 홍보책자입니다. 공장별 적용 언어를 선택하면 해당 에디션의 디지털 서재와 책으로 이동합니다.</p>
            <div class="hd18-meta"><div><span>PUBLICATION</span><strong>2026.08.20</strong></div><div><span>AUTHOR</span><strong>HQ 생산혁신팀<br>서지철 책임매니저</strong></div><div><span>EDITION</span><strong>4 Languages<br>Global Edition</strong></div></div>
          </div>
          <div class="hd18-secure"><i></i> CONFIDENTIAL · INTERNAL USE ONLY · 무단 복제/배포 금지</div>
        </section>
        <section class="hd18-choose">
          <div class="hd18-choose-label">SELECT YOUR PLANT EDITION</div>
          <h3>적용 공장 / 언어 선택</h3>
          <p>국기는 해당 언어판이 적용되는 공장을 의미합니다.</p>
          <div class="hd18-editions">
            <button class="hd18-edition-card" data-gate-lang="ko" type="button"><div class="hd18-card-head"><span class="hd18-card-vol">VOL.01 · KOREAN</span><span class="hd18-card-flags">🇰🇷</span></div><div class="hd18-card-body"><b>한국어</b><span>Korean Edition</span><div class="hd18-plant-label">APPLICABLE PLANT</div><span class="hd18-plants">대한민국 · Korea Plant</span><div class="hd18-card-foot"><span>2026 EDITION</span><i>→</i></div></div></button>
            <button class="hd18-edition-card" data-gate-lang="en" type="button"><div class="hd18-card-head"><span class="hd18-card-vol">VOL.02 · ENGLISH</span><span class="hd18-card-flags">🇮🇳 🇧🇷 🇳🇴</span></div><div class="hd18-card-body"><b>English</b><span>English Edition</span><div class="hd18-plant-label">APPLICABLE PLANTS</div><span class="hd18-plants">India · Brazil · Norway</span><div class="hd18-card-foot"><span>2026 EDITION</span><i>→</i></div></div></button>
            <button class="hd18-edition-card" data-gate-lang="pt-BR" type="button"><div class="hd18-card-head"><span class="hd18-card-vol">VOL.03 · PORTUGUÊS</span><span class="hd18-card-flags">🇧🇷</span></div><div class="hd18-card-body"><b>Português</b><span>Edição em Português</span><div class="hd18-plant-label">PLANTA APLICÁVEL</div><span class="hd18-plants">Brasil · Brazil Plant</span><div class="hd18-card-foot"><span>2026 EDIÇÃO</span><i>→</i></div></div></button>
            <button class="hd18-edition-card" data-gate-lang="zh-CN" type="button"><div class="hd18-card-head"><span class="hd18-card-vol">VOL.04 · 简体中文</span><span class="hd18-card-flags">🇨🇳</span></div><div class="hd18-card-body"><b>简体中文</b><span>简体中文版</span><div class="hd18-plant-label">适用工厂</div><span class="hd18-plants">中国 · China Plant</span><div class="hd18-card-foot"><span>2026 版本</span><i>→</i></div></div></button>
          </div>
          <p class="hd18-note">각 에디션의 국기는 언어 자체가 아니라 <strong>해당 언어판의 적용 대상 공장</strong>을 표시합니다. English Edition은 India, Brazil, Norway 공장에 적용됩니다.</p>
        </section>
      </div>`;
  }

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
  window.addEventListener('beforeprint',()=>protect());
  document.addEventListener('visibilitychange',()=>{if(document.hidden)shield.classList.add('show');else setTimeout(()=>shield.classList.remove('show'),250)});
})();