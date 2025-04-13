function addMenu() {
  const content = document.querySelector('#content');

  const heading = document.createElement('h1');
  heading.textContent = 'Menu';
  content.appendChild(heading);

  const ul = document.createElement('ul');
  const dishes = ['Mapo Tofu', 'Fish head with chopped pepper', 'Stir-fried beef', 'Stir-fried Lamb with Scallions']

  function addDish(dishes) {
    for (let dish of dishes) {
      const item1 = document.createElement('li');
      item1.textContent = dish;
      ul.appendChild(item1);
    }
  }

  addDish(dishes);
  content.appendChild(ul);
}

export default addMenu;



