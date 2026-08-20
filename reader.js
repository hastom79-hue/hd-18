
(()=> {
  const root=document.querySelector('.reader'); if(!root) return;
  const key='hdps-bookmark';
  const lang=root.dataset.lang;
  const btn=root.querySelector('[data-bookmark]');
  const ribbon=root.querySelector('.bookmark-ribbon');
  const sync=()=>{const on=localStorage.getItem(key)===lang;btn.classList.toggle('active',on);ribbon.classList.toggle('show',on);btn.textContent=on?'★ Bookmarked':'☆ Bookmark'};
  btn.addEventListener('click',()=>{localStorage.getItem(key)===lang?localStorage.removeItem(key):localStorage.setItem(key,lang);sync()});
  root.querySelector('[data-home]').addEventListener('click',()=>location.href='../');
  sync();
})();
