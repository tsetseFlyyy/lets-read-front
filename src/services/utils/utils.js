import { myBook } from "../__fixtures__/AddBookFixture";

export class Books {
  get() {
    return fetch("https://lets-read-back.onrender.com/books").then(
      (response) => {
        return response.json();
      }
    );
  }
  post(data) {
    return fetch("https://lets-read-back.onrender.com/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      return response.json();
    });
  }
  delete(id) {
    return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
      method: "DELETE",
    });
  }
  sendToFriend() {

  }
}
