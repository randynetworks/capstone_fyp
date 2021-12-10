const createListCategory = (category) => `
    <a class="btn btn-success mt-3" href="#/list-info/${category.id}" role="button">${category.name}</a>`;

const createListInfo = (info) => `
    <div class="row list-item mb-4 mx-2">
        <div class="col align-self-center">
            <img src="${info.url_image}" alt="Gambar ${info.name}" class="img-fluid">
        </div>
        <div class="col align-self-center">
            <h4><a href="${`/#/detail-info/${info.id}`}" class="item-title">${info.name}</a></h4>
            <p>${info.description}</p>
            <p class="text-secondary">Dibuat oleh ${info.username}</p>
        </div>
    </div>`;

const createDetailInfo = (detail) => `
<div class="row text-center mb-4">
              <div class="col">
                  <h2>${detail.data[0].name}</h2>
              </div>
          </div>
    <div class="row mb-4 p-4 bg-detail">
        <div class="col">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <img src="${detail.data[0].url_image}" class="w-100 rounded" alt="Gambar ${detail.data[0].name}">
                </div>
                <div class="col-md-6 text-left mt-4 text-detail">
                    <p class="card-text">${detail.data[0].description}</p>
                    <p class="card-text text-secondary">Di Unggah Oleh ${detail.data[0].username}</p>
                    <p class="card-text">Lihat secara lebih lengkap <a href="${detail.data[0].url}" class="link">disini.</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row text-center comentar">
        <div class="col">
            <h5 class="card-title"><a href="${`/#/comments/${detail.data[0].id}`}" class="link">Lihat Komentar</a></h5>
        </div>
    </div>
`;

const createComments = (comments) => `
    <div class="card p-3 mt-2 comment-custom">
        <div class="d-flex justify-content-between align-items-center">
            <div class="user d-flex flex-row align-items-center"> 
                <span>
                    <small class="font-weight-bold user-comment">${comments.username}</small> 
                    <small class="font-weight-bold">${comments.comment}</small>
                </span> 
            </div> 
            <small>3 days ago</small>
        </div>
        <div class="action d-flex justify-content-between mt-2 align-items-center">
            <div class="reply px-4"> <small>Remove</small> <span class="dots"></span> <small>Reply</small> </div>
        </div>
    </div>
    `;

export {
  createListCategory,
  createListInfo,
  createDetailInfo,
  createComments,
};
