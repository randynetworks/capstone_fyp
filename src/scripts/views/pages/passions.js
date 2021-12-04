import '../components/hero-component';
import FypDbSource from '../../data/fyp-source';
import createListCategory from '../templates/template-creator';

const Passions = {
  async render() {
    return `
    <hero-component></hero-component>
    <section id="category" class="mb-4">
    <div class="container">
      <div class="row text-center">
        <div class="col">
          <h2>What is your passion?</h2>
        </div>
      </div>
      <div class="row text-center mt-3">
        <div class="col" id="categoryInfo">
          
        </div>
      </div>
    </div>`;
  },

  async afterRender() {
    const passions = await FypDbSource.passions();
    const passionsCategory = document.querySelector('#categoryInfo');
    passions.forEach((passion) => {
      passionsCategory.innerHTML += createListCategory(passion);
    });
  },
};

export default Passions;
