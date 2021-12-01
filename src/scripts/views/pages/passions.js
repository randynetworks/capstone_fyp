import '../components/hero-component';
import FypDbSource from '../../data/fyp-source';

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
            <div class="col">
              <a class="btn btn-success mt-3" href="#" role="button">Web</a>
              <a class="btn btn-success mt-3" href="#" role="button">Android</a>
              <a class="btn btn-success mt-3" href="#" role="button">Cloud</a>
              <a class="btn btn-success mt-3" href="#" role="button">Language</a>
              <a class="btn btn-success mt-3" href="#" role="button">Design</a>
              <a class="btn btn-success mt-3" href="#" role="button">Animation</a>
              <a class="btn btn-success mt-3" href="#" role="button">iOS</a>
              <a class="btn btn-success mt-3" href="#" role="button">Multiplatform</a>
              <a class="btn btn-success mt-3" href="#" role="button">Network</a>
            </div>
          </div>
        </div>
     </section>`;
  },

  async afterRender() {
    const passions = await FypDbSource.passsions();
    console.log(passions);
  },
};

export default Passions;
