import UrlParser from '../../routes/url-parser';
import FypDbSource from '../../data/fyp-source';
import { createComments } from '../templates/template-creator';

const Comments = {
  async render() {
    return `
    <section id="post-info" class="mt-5">
      <div class="container pt-5">
          <div class="row d-flex justify-content-center">
              <div class="col-md-8">
                  <div class="headings d-flex justify-content-between align-items-center mb-3">
                      <h5>Komentar</h5>
                  </div>
                  <div id="comments-container"> 
                  
                  </div>
                  <div class="card p-3 mt-2 comment-custom">
                    <div class="mb-3">
                        <label for="nameOfContentCreator" class="form-label">Nama</label>
                        <input type="email" class="form-control" id="nameOfContentCreator" placeholder="Nama Anda">
                    </div>
                    <div class="mb-3 form-floating">
                        <textarea class="form-control" placeholder="Masukkan komentar" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Komentar</label>
                    </div>
                    <div class="mb-3 text-end">
                        <button class="btn btn-submit text-white" type="submit">Unggah</button>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const commentsList = await FypDbSource.comments(url.id);
    console.log(commentsList.data.comments);
    const commentsContainer = document.querySelector('#comments-container');

    commentsList.data.comments.forEach((comment) => {
      commentsContainer.innerHTML += createComments(comment);
    });
  },
};

export default Comments;
