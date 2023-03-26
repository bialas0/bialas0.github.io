const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn');
const navbarEl = document.querySelector('.navbar');

let isVisible = false;

window.addEventListener('DOMContentLoaded', () => {
  hamburgerBtn.addEventListener('click', () => {
    if (!isVisible) {
      navbarEl.style.height = '100vh';
      navbarEl.style.visibility = 'visible';
      isVisible = true;
    }
  });
  closeBtn.addEventListener('click', () => {
    if (isVisible) {
      console.log('cloicked!')
      navbarEl.style.height = '0';
      navbarEl.style.visibility = 'hidden';
      isVisible = false;
    }
  });
});