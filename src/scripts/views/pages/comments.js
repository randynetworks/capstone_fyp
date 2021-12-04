import FypDbSource from '../../data/fyp-source';

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
                  <div class="card p-3 mt-2 comment-custom">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="user d-flex flex-row align-items-center"> 
                              <span>
                                  <small class="font-weight-bold user-comment">olan_sams</small> 
                                  <small class="font-weight-bold">Loving your work and profile!</small>
                              </span> 
                          </div> 
                          <small>3 days ago</small>
                      </div>
                      <div class="action d-flex justify-content-between mt-2 align-items-center">
                          <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> </div>
                      </div>
                  </div>
                  <div class="card p-3 mt-2 comment-custom">
                      <div class="d-flex justify-content-between align-items-center">
                          <div class="user d-flex flex-row align-items-center">
                              <span>
                                  <small class="font-weight-bold user-comment">simona_rnasi</small> 
                                  <small class="font-weight-bold user-comment">@macky_lones</small> 
                                  <small class="font-weight-bold">Thanks</small>
                              </span> 
                          </div> 
                          <small>3 days ago</small>
                      </div>
                      <div class="action d-flex justify-content-between mt-2 align-items-center ">
                          <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> </div>
                          <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                      </div>
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
    const comments = await FypDbSource.comments(url.id);
    console.log(comments);
  },
};

export default Comments;
