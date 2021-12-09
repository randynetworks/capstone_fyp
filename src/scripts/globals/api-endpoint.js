import CONFIG from './config';

const API_ENDPOINT = {
  PASSIONS: `${CONFIG.BASE_URL}api/v1/passions`,
  POST_INFO: `${CONFIG.BASE_URL}api/v1/platforms`,
  LIST_INFO: (id) => `${CONFIG.BASE_URL}api/v1/passions/${id}`,
  DETAIL_INFO: (id) => `${CONFIG.BASE_URL}api/v1/platforms/${id}`,
  COMMENTS: (id) => `${CONFIG.BASE_URL}api/v1/comments/${id}`,
};

export default API_ENDPOINT;
