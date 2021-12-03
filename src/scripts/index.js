import 'regenerator-runtime';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min';
import '../styles/main.css';
import App from './views/app';

const app = new App({
  drawer: document.querySelector('#navbar-toggler'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
