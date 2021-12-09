import FypDbSource from '../../data/fyp-source';
import { createListInfo } from '../templates/template-creator';

const ListInfo = {
  async render() {
    return `
    <section id="list-item" class="mt-5">
      <div class="container pt-5">
        <div class="row text-center mb-4">
            <div class="col">
                <h2>Web Developer</h2>
            </div>
        </div>
        <div id="listInfo">
            
        </div>
    </section>
      `;
  },

  async afterRender() {
    const listInfo = await FypDbSource.listInfo();
    const listInfoContainer = document.querySelector('#listInfo');
    listInfo.forEach((info) => {
      listInfoContainer.innerHTML += createListInfo(info);
    });
  },
};

export default ListInfo;
