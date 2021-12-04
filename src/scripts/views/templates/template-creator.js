import CONFIG from '../../globals/config';

const createListCategory = (category) => `
<a class="btn btn-success mt-3" href="#/list-info" role="button">${category.name}</a>`;

export default createListCategory;
