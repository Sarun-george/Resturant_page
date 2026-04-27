// home.js
import foodImage from "./jason-leung-poI7DelFiVA-unsplash.jpg";


export function loadHomePage() {
  const content = document.querySelector('#content');

  const welcomeSection = document.createElement('div');
  welcomeSection.classList.add('welcome-section');

  welcomeSection.innerHTML = `
    <div class="welcome-information">
      <h1>Welcome to Bethel Restaurant</h1>
      <p>Experience the finest flavours crafted with passion and served with care.
        At Bethel, every meal is a moment to savour.</p>
      <button>Reserve a Table</button>
    </div>
    <div class="welcome-image">
      <img src=${foodImage} alt="Welcome Image">
    </div>
  `;

  content.appendChild(welcomeSection);
}