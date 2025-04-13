import './styles.css'
import addMenu from './menu'
import addHome from './home';
import addAbout from './about';

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const aboutBtn = document.querySelector('.about');
const content = document.querySelector('#content');

addHome();

homeBtn.addEventListener('click', () => {
  content.textContent = '';
  addHome();
})

menuBtn.addEventListener('click', () => {
  content.textContent = '';
  addMenu();
})

aboutBtn.addEventListener('click', () => {
  content.textContent = '';
  addAbout();
}) 
