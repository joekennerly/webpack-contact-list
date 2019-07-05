console.log("APIs loaded");

export const API = {
  getData(resource, queryParams) {
    let url = `http://localhost:8088/${resource}`;
    if (queryParams) {
      url += `?${queryParams}`;
    }
    return fetch(url).then(data => data.json());
  },

  postData(resource, data) {
    return fetch(`http://localhost:8088/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }
};
