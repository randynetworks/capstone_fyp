import FypDbSource from '../../data/fyp-source';
import { createListInfo } from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';

const ListInfo = {
  async render() {
    return `
    <section id="list-item" class="mt-5">
      <div class="container pt-5">
        <div class="row text-center mb-4">
            <div class="col">
                <h2 id="title"></h2>
            </div>
        </div>
        <div id="listInfo">
            
        </div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const listInfo = await FypDbSource.listInfo(url.id);
    const listInfoContainer = document.querySelector('#listInfo');
    const title = document.querySelector('#title');
    title.innerHTML = listInfo.passion[0].name;

    listInfo.platforms.forEach((info) => {
      listInfoContainer.innerHTML += createListInfo(info);
    });
  },
};

export default ListInfo;
