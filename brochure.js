
(()=>{const root=document.querySelector('.brochure-app');if(!root)return;const current=root.dataset.book||'ko',key='hdps-brochure-bookmark',r=document.querySelector('.bookmark-ribbon'),b=document.querySelector('[data-bookmark]'),t=document.querySelector('.resume-toast');
const sync=()=>{const on=localStorage.getItem(key)===current;r?.classList.toggle('show',on);b?.classList.toggle('is-saved',on);if(b)b.textContent=on?'★ Bookmarked':'☆ Bookmark'};
b?.addEventListener('click',()=>{localStorage.getItem(key)===current?localStorage.removeItem(key):localStorage.setItem(key,current);sync();if(t){t.textContent=localStorage.getItem(key)===current?'★ Bookmark saved':'Bookmark removed';t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)}});
document.querySelector('[data-home]')?.addEventListener('click',()=>location.href=`../?lang=${encodeURIComponent(current)}`);localStorage.setItem('hdps-language',current);sync()})();
