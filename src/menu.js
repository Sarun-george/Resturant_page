const menuItems = [
  {
    title: "Grilled Salmon",
    description: "Fresh salmon fillet grilled to perfection, served with a lemon butter sauce and seasonal vegetables.",
  },
  {
    title: "Classic Cheeseburger",
    description: "Juicy beef patty topped with melted cheese, lettuce, tomato, and our special sauce, served with crispy fries.",
  },
  {
    title: "Margherita Pizza",
    description: "Thin crust pizza topped with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.",
  },
  {
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
  },
];

export function loadMenuPage() {
  const content = document.querySelector('#content');

  const menuHeading = document.createElement('div');
  menuHeading.classList.add('menu-heading');
  menuHeading.innerHTML = `<h1>Menu</h1>`;

  const menuItemsDiv = document.createElement('div');
  menuItemsDiv.classList.add('menu-items');

  menuItems.forEach(item => {
    const card = document.createElement('div');
    card.innerHTML = `
      <h2>${item.title}</h2>
      <p>${item.description}</p>
    `;
    menuItemsDiv.appendChild(card);
  });

  content.appendChild(menuHeading);
  content.appendChild(menuItemsDiv);
}