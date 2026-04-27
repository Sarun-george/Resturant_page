// index.js
import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";


const path = window.location.pathname;

if (path.endsWith("index.html") || path.endsWith("/")) {
  loadHomePage();
} else if (path.endsWith("menu.html")) {
  loadMenuPage();
} else if (path.endsWith("about.html")) {
  loadAboutPage();
}
