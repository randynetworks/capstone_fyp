import CONFIG from './config';

const API_ENDPOINT = {
  PASSIONS: `${CONFIG.BASE_URL}api/v1/passions`,
  POST_INFO: `${CONFIG.BASE_URL}api/v1/platforms`,
  POST_COMMENT: `${CONFIG.BASE_URL}api/v1/comments`,
  LIST_INFO: (id) => `${CONFIG.BASE_URL}api/v1/passions/${id}`,
  DETAIL_INFO: (id) => `${CONFIG.BASE_URL}api/v1/platforms/${id}`,
  COMMENTS: (id) => `${CONFIG.BASE_URL}api/v1/platforms/${id}/comments`,
};

export default API_ENDPOINT;
