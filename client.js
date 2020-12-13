class Client {
  getData(endpoint) {
    return fetch(`https://my-json-server.typicode.com/rediska-ua/websiteShop/${endpoint}`)
      .then(response => response.json());
  }
  postData(data, endpoint) {
    return fetch(`https://my-json-server.typicode.com/rediska-ua/websiteShop/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    }).then(responce => responce.json())
  }
}

export default Client;