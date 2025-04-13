function addHome() {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1')
  heading.textContent = 'Welcome to this restaurant!'
  const para = document.createElement('p');
  para.textContent = 'This is a Chinese food restaurant. Please view our menu to order.'
  content.appendChild(heading);
  content.appendChild(para);
}

export default addHome;