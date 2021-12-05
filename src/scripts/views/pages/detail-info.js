import UrlParser from '../../routes/url-parser';
import FypDbSource from '../../data/fyp-source';
import { createDetailInfo } from '../templates/template-creator';

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
          <div id="detailInfo">
          
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detail = await FypDbSource.detailInfo(url.id);
    const detailContainer = document.querySelector('#detailInfo');
    detailContainer.innerHTML = createDetailInfo(detail);
  },
};

export default DetailInfo;
