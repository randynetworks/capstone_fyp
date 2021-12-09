import FypDbSource from '../../data/fyp-source';

const PostInfo = {
  async render() {
    return `
    <section id="post-info" class="mt-5">
      <div class="container pt-5">
          <div class="row text-center mb-4">
              <div class="col">
                  <h2>Post Your Information</h2>
              </div>
          </div>
        <div class="row post-custom mb-5">
          <div class="mb-3">
              <label for="nameOfContentCreator" class="form-label">Nama Pengunggah</label>
              <input type="text" class="form-control" id="nameOfContentCreator" placeholder="Nama Anda" required>
          </div>
          <div class="mb-3">
              <label for="nameOfCourse" class="form-label">Nama Kursus/Pelatihan</label>
              <input type="text" class="form-control" id="nameOfCourse" placeholder="Nama Kelas Kursus/Pelatihan" required>
          </div>
          <div class="mb-3">
              <div class="form-group">
              <label for="exampleFormControlSelect1">Kategori Passion</label>
              <select class="form-control" id="listKategory">
              </select>
            </div>
          </div>
          <div class="mb-3">
              <label for="imageOfCourse" class="form-label">Gambar</label>
              <input type="text" class="form-control" id="imageOfCourse">
          </div>
          <div class="mb-3">
              <label for="linkOfCourse" class="form-label">URL</label>
              <input type="text" class="form-control" id="linkOfCourse" placeholder="https://contohurl.com/id/registrasi/" required>
          </div>
          <div class="mb-3">
              <label for="courseDescription" class="form-label">Deskripsi</label>
              <textarea class="form-control" id="courseDescription" rows="3" placeholder="Info detail" required></textarea>
          </div>
          <div class="mb-3 text-end">
              <button class="btn btn-submit text-white" type="submit">Unggah</button>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const postInfo = await FypDbSource.postInfo();
    const listKategory = document.getElementById('listKategory');
    const dataListKategory = await FypDbSource.passions();
    dataListKategory.forEach((kategori) => {
      const optionKategory = document.createElement('option');
      optionKategory.text = kategori.name;
      optionKategory.value = kategori.id;
      listKategory.add(optionKategory);
    });
  },
};

export default PostInfo;
