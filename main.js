const btn_nav = document.querySelector('.navigationIcon');
const container_menu = document.querySelector('.container-menu');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
let toggle = 0;

btn_nav.addEventListener('click', () => {
  
  if(toggle === 0) {
    toggle++;
    b2.style.display = 'none';
    b1.style.top = '2.5px';
    b1.style.transform = 'rotate(225deg)';
    b3.style.transform = 'rotate(-225deg)';
    b3.style.top = '-2.5px';
    container_menu.style.left = '0%';
    container_menu.style.bottom = '0%';
    container_menu.style.transition = 'all 1s ease-out';
  } else {
    toggle--;
    b2.style.display = 'block'
    b1.style.top = '-10px';
    b1.style.transform = 'rotate(0deg)';
    b3.style.transform = 'rotate(0deg)';
    b3.style.top = '10px';
    container_menu.style.left = '-100%';
    container_menu.style.bottom = '-100%';
    container_menu.style.transition = 'all 1s ease-in';
  }
})

