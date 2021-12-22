import API_ENDPOINT from '../globals/api-endpoint';

class FypDbSource {
  static async passions() {
    const response = await fetch(API_ENDPOINT.PASSIONS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async postInfo(cources) {
    fetch(API_ENDPOINT.POST_INFO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cources),
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  }

  static async listInfo(id) {
    const response = await fetch(API_ENDPOINT.LIST_INFO(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async detailInfo(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_INFO(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async comments(id) {
    const response = await fetch(API_ENDPOINT.COMMENTS(id));
    return response.json();
  }
}

export default FypDbSource;
