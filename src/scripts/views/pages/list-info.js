import FypDbSource from '../../data/fyp-source';

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
        <div class="row list-item mb-4">
            <div class="col align-self-center">
                <img src="https://media.istockphoto.com/photos/pond-at-waterline-picture-id1035285964?k=6&m=1035285964&s=612x612&w=0&h=yGLh3UwtFLxBOW-_wuXCzc8-S-iC2_vDOuKOP1e3csU=" alt="" class="img-fluid">
            </div>
            <div class="col align-self-center">
                <h4><a href="#" class="item-title">Belajar Dasar Pemrograman Web</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, consequatur!</p>
                <p class="text-secondary">dibuat oleh Dianah</p>
            </div>
        </div>
        <div class="row list-item mb-4">
            <div class="col align-self-center">
                <img src="https://media.istockphoto.com/photos/pond-at-waterline-picture-id1035285964?k=6&m=1035285964&s=612x612&w=0&h=yGLh3UwtFLxBOW-_wuXCzc8-S-iC2_vDOuKOP1e3csU=" alt="" class="img-fluid">
            </div>
            <div class="col align-self-center">
                <h4><a href="#" class="item-title">Belajar Dasar Pemrograman Web</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, consequatur!</p>
                <p class="text-secondary">dibuat oleh Dianah</p>
            </div>
        </div>
        <div class="row list-item mb-4">
            <div class="col align-self-center">
                <img src="https://media.istockphoto.com/photos/pond-at-waterline-picture-id1035285964?k=6&m=1035285964&s=612x612&w=0&h=yGLh3UwtFLxBOW-_wuXCzc8-S-iC2_vDOuKOP1e3csU=" alt="" class="img-fluid">
            </div>
            <div class="col align-self-center">
                <h4><a href="#" class="item-title">Belajar Dasar Pemrograman Web</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, consequatur!</p>
                <p class="text-secondary">dibuat oleh Dianah</p>
            </div>
        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    const listInfo = await FypDbSource.listInfo();
    console.log(listInfo);
  },
};

export default ListInfo;
