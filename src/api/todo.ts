const url = "https://jsonplaceholder.typicode.com/todos";

class TodoApi {
  fetchById(id: number) {
    return fetch(`${url}/${id}`).then((res) => res.json());
  }

  fetchAll() {
    return fetch(url).then((res) => res.json());
  }
}

export default new TodoApi();
