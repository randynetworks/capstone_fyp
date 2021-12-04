import API_ENDPOINT from '../globals/api-endpoint';

class FypDbSource {
  static async passions() {
    const response = await fetch(API_ENDPOINT.PASSIONS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async postInfo() {
    const response = await fetch(API_ENDPOINT.POST_INFO);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async listInfo() {
    const response = await fetch(API_ENDPOINT.LIST_INFO);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailInfo(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_INFO(id));
    return response.json();
  }

  static async comments(id) {
    const response = await fetch(API_ENDPOINT.COMMENTS(id));
    return response.json();
  }
}

export default FypDbSource;
