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
                        <textarea class="form-control" placeholder="Masukkan komentar" id="comment"></textarea>
                        <label for="comment">Komentar</label>
                    </div>
                    <div class="mb-3 text-end">
                        <button class="btn btn-submit text-white" type="submit" id="buttonSave">Unggah</button>
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
    const nameOfContentCreator = document.querySelector(
      // eslint-disable-next-line comma-dangle
      '#nameOfContentCreator'
    );
    const comment = document.querySelector('#comment');

    const commentsList = await FypDbSource.comments(url.id);

    const commentsContainer = document.querySelector('#comments-container');

    const commentsData = commentsList.data.comments;
    commentsData.forEach((c) => {
      commentsContainer.innerHTML += createComments(c);
    });

    buttonSave.addEventListener('click', () => {
      const dataComment = {
        username: nameOfContentCreator.value,
        comment: comment.value,
        platform_id: url.id,
      };
      FypDbSource.postComment(dataComment);

      window.location = `/#/comments/${url.id}`;
    });
  },
};

export default Comments;
