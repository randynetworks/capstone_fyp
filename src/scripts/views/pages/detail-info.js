import FypDbSource from '../../data/fyp-source';

const DetailInfo = {
  async render() {
    return `
    <section id="detail-item" class="mt-5">
      <div class="container pt-5">
          <div class="row text-center mb-4">
              <div class="col">
                  <h2>Detail Info</h2>
              </div>
          </div>
          <div class="row mb-4 p-4 bg-detail">
              <div class="col">
                  <div class="card">
                      <img src="img/img1.jpg" class="card-img-top" alt="...">
                      <div class="card-body text-center">
                          <h5 class="card-title">Belajar Dasar Pemrograman Web</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <p class="card-text text-secondary">Dibuat Oleh Dianah</p>
                          <p class="card-text"><a href="#" class="link">link pendaftaran</a></p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row text-center comentar">
              <div class="col">
                  <h5 class="card-title"><a href="#" class="link">Lihat Komentar</a></h5>
              </div>
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailInfo = await FypDbSource.IdetailInfoInfo(url.id);
    console.log(detailInfo);
  },
};

export default DetailInfo;
