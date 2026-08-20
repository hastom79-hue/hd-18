
(()=>{const books={
ko:{lang:'ko',vol:'VOL. 01 · KOREAN',title:'한국어',sub:'LEAN 제조혁신활동',open:'책 열기 →'},
en:{lang:'en',vol:'VOL. 02 · ENGLISH',title:'English',sub:'Lean Manufacturing Excellence',open:'Open book →'},
'pt-BR':{lang:'pt-BR',vol:'VOL. 03 · PORTUGUÊS',title:'Português',sub:'Excelência em Manufatura Lean',open:'Abrir livro →'},
'zh-CN':{lang:'zh-CN',vol:'VOL. 04 · 中文',title:'简体中文',sub:'精益制造卓越',open:'打开书籍 →'}};
const q=new URLSearchParams(location.search);let current=q.get('lang')||localStorage.getItem('hdps-language')||'ko';if(!books[current])current='ko';
const render=()=>{const b=books[current];document.querySelectorAll('[data-lang]').forEach(x=>x.classList.toggle('active',x.dataset.lang===current));
const cover=document.querySelector('[data-cover]');cover.innerHTML=`<span class="book-spine"></span><div><div class="cover-vol">${b.vol}</div><div class="cover-title">HDPS<br>${b.title}</div><div class="cover-sub">${b.sub}</div></div><div><div class="cover-meta">지은이 · HQ 생산혁신팀 서지철 책임매니저<br>발간일 · 2026.08.20</div><a class="book-open" href="${b.lang}/">${b.open}</a></div>`;
localStorage.setItem('hdps-language',current);history.replaceState(null,'',`?lang=${encodeURIComponent(current)}`);cover.classList.remove('fade-in');void cover.offsetWidth;cover.classList.add('fade-in')};
document.querySelectorAll('[data-lang]').forEach(btn=>btn.onclick=()=>{current=btn.dataset.lang;render()});render()})();
