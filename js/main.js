try{
$('.fotorama').fotorama({
  
  width: '1190px',
  ratio: 16/8,
  allowfullscreen: true,
  autoplay: true,
  transition: 'crossfade',
  transitionduration: 3000,
  
});
}
catch(err){

  console.log(err);
}
// TABS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function init (){
  let tabBody = document.querySelectorAll('.tab-body');
  for (let i = 1; i < tabBody.length; i++) {
    tabBody[i].style.display = 'none';
}
}  

init();
  

let tab = document.querySelectorAll('.tab');

tab.forEach(function (element) {
  element.onclick = showTab;
});


function showTab(){
let dataA = this.getAttribute('data-tab');

let tabBody = document.querySelectorAll('.tab-body');
for (let i = 0; i < tabBody.length; i++) {
  tabBody[i].style.display = 'none';
}
 


// tabBody[data-tab = `${dataA}`].style.display = 'block';
document.querySelector(`.tab-body[data-tab="${dataA}"]`).style.display = 'block';
} 


// LightBox+++++++++++++++++++++++++

let div = document.createElement('div');
div.classList.add('lightbox');
document.body.appendChild(div);
const i = document.querySelectorAll('.i1');
i.forEach(function(item){
item.addEventListener('click', ()=>{
  div.classList.add('active1');
  let iBig = document.createElement('img');
  iBig.src = item.src;
  iBig.style.width = 800 +'px';
  if (div.firstChild){
    div.removeChild(div.firstChild);
  }
  div.appendChild(iBig);
});
});
div.addEventListener('click', (e)=>{
  // if(e.target !== e.currentTarget){
  //   return;
  // }
  div.classList.remove('active1');
  console.log(e);
});
// 
document.querySelector('.burger').onclick = f3;

function f3(){
  let nav = document.querySelector('.pages');
  nav.classList.add('open');
  nav.addEventListener('click', ()=>{
      nav.classList.remove('open');
  })
}
// 

