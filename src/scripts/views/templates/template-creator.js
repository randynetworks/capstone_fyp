const createListCategory = (category) => `
    <a class="btn btn-success mt-3" href="#/list-info" role="button">${category.name}</a>`;

const createListInfo = (info) => `
    <div class="row list-item mb-4">
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
    <div class="row mb-4 p-4 bg-detail">
        <div class="col">
            <div class="card">
                <img src="${detail.data.url_image}" class="card-img-top" alt="Gambar ${detail.data.name}">
                <div class="card-body text-center">
                    <h5 class="card-title">${detail.data.name}</h5>
                    <p class="card-text">${detail.data.description}</p>
                    <p class="card-text text-secondary">Di Unggah Oleh ${detail.data.username}</p>
                    <p class="card-text">Lihat secara lebih lengkap <a href="${detail.data.url}" class="link">disini.</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row text-center comentar">
        <div class="col">
            <h5 class="card-title"><a href="${`/#/comments/${detail.data.id}`}" class="link">Lihat Komentar</a></h5>
        </div>
    </div>
`;

export { createListCategory, createListInfo, createDetailInfo };
