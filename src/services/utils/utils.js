import { myBook } from "../__fixtures__/AddBookFixture";

export class Books {
  get() {
    return fetch("https://lets-read-back.onrender.com/books").then(
      (response) => {
        return response.json();
      }
    );
  }
  addBook(data) {
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
  deleteBook(id) {
    return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
      method: "DELETE",
    });
  }
  sendToFriend(id, data) {
    return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  returnBook(id, data) {
    return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
}
