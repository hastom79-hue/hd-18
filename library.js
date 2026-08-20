
(()=> {
  const editions = {
    ko:{href:'ko/',edition:'VOL.01 · KOREAN',title:'LEAN 제조혁신활동',open:'이 책 읽기',info:'HDPS · 한국어',desc:'HDPS의 6대 원칙과 19개 모듈, 현장 실행 체계를 소개하는 공식 디지털 홍보책자입니다.'},
    en:{href:'en/',edition:'VOL.02 · ENGLISH',title:'Lean Manufacturing Excellence',open:'Read this book',info:'HDPS · English',desc:'The official digital brochure introducing the HDPS framework, 6 principles, 19 modules and field execution system.'},
    'pt-BR':{href:'pt-BR/',edition:'VOL.03 · PORTUGUÊS',title:'Excelência em Manufatura Lean',open:'Ler este livro',info:'HDPS · Português',desc:'Brochura digital oficial que apresenta o framework HDPS, 6 princípios, 19 módulos e a execução no chão de fábrica.'},
    'zh-CN':{href:'zh-CN/',edition:'VOL.04 · 简体中文',title:'精益制造卓越',open:'阅读本书',info:'HDPS · 简体中文',desc:'介绍HDPS体系、6大原则、19个模块及现场执行体系的官方数字宣传册。'}
  };
  const root=document.querySelector('.library-app');
  if(!root) return;
  const buttons=[...root.querySelectorAll('[data-lang]')];
  const featured=root.querySelector('[data-featured-book]');
  const edition=root.querySelector('[data-edition]');
  const coverTitle=root.querySelector('[data-cover-title]');
  const openText=root.querySelector('[data-open-text]');
  const infoTitle=root.querySelector('[data-info-title]');
  const infoDesc=root.querySelector('[data-info-desc]');
  let current='ko';

  function select(lang){
    if(!editions[lang]) return;
    current=lang;
    const d=editions[lang];
    buttons.forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));
    featured.href=d.href;
    edition.textContent=d.edition;
    coverTitle.textContent=d.title;
    openText.innerHTML=`${d.open} <b>→</b>`;
    infoTitle.textContent=d.info;
    infoDesc.textContent=d.desc;
    featured.animate(
      [{transform:'translateY(-18px) rotateY(-4deg) scale(.985)',filter:'brightness(.92)'},
       {transform:'translateY(-18px) rotateY(-4deg) scale(1)',filter:'brightness(1)'}],
      {duration:360,easing:'cubic-bezier(.2,.8,.2,1)'}
    );
  }

  buttons.forEach(btn=>btn.addEventListener('click',()=>select(btn.dataset.lang)));
  select(current);
})();
