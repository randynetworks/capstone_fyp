class HeroComponent extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = `
        <div class="container">
            <section class="jumbotron text-center">
            <img src="hero.jpg" class="img-fluid hero-img" alt="Hero">
            </section>
        </div>
        `;
  }
}

customElements.define('hero-component', HeroComponent);
