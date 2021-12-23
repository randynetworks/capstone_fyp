const About = {
  async render() {
    return `
    <section class="bg-light" id="about">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <h2 class="text-center mb-3 about">About FYP</h2>
                    <div class="mx-auto mb-4 text-center fs-5"><b>Find Your Passion (FYP)</b> merupakan website yang berisikan kumpulan informasi terkait platform pelatihan/kursus yang dilakukan secara online maupun offline yang dibagikan langsung oleh para user lainnya. Dapat membagikan serta memberi tanggapan terkait platform berdasarkan informasi yang diketahui atau berdasarkan pengalaman dari user </div>
                </div>
            </div>
            <h2 class="text-uppercase text-center mb-4 mt-5">The Team</h2>
            <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="https://avatars.githubusercontent.com/u/32605226?v=4" alt="..." />
                    <h4>Randy Ramadhan</h4>
                    <p class="text-muted">Head of Engineer</p>
                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-instagram"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="https://github.com/randynetworks"><i class="fab fa-github"></i></a>
                    <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/randynetworks"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="https://www.linkpicture.com/q/nr_1.jpg" alt="Gambar Nurfadhilah" />
                        <h4>Nurfadhilah</h4>
                        <p class="text-muted">Front-End Developer</p>
                        <a class="btn btn-dark btn-social mx-2" href="https://instagram.com/fadhilah_kim/"><i class="fab fa-instagram"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://github.com/nurfadhilah1699"><i class="fab fa-github"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/nurfadhilah"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  },

  async afterRender() {
    console.log('great');
  },
};

export default About;
