function addAbout() {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1')
  heading.textContent = 'Info'
  const para = document.createElement('p');
  para.textContent = 'For now we only have Xiang Cai, more styles will be added soon.'
  content.appendChild(heading);
  content.appendChild(para);
}

export default addAbout;