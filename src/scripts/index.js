import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../styles/main.css';
import App from './views/app';

window.addEventListener('hashchange', () => {
  App.renderPage();
});

window.addEventListener('load', () => {
  App.renderPage();
});
