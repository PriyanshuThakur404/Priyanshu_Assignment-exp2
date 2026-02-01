// Simple nav → iframe loader
const links = document.querySelectorAll('.top-nav a[data-src]');
const iframe = document.getElementById('preview');
const openNew = document.querySelector('.open-new');

function setActive(link){
  links.forEach(l=>l.classList.remove('active'));
  if(link) link.classList.add('active');
  if(openNew) openNew.href = link ? link.dataset.src : iframe.src;
}

links.forEach(l=>{
  l.addEventListener('click', e=>{
    e.preventDefault();
    const src = l.dataset.src;
    iframe.src = src;
    setActive(l);
  });
});

// mark the first link active on load
if(links.length) setActive(links[0]);