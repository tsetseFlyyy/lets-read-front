export class Books {
  get() {
    try {
      return fetch("https://lets-read-back.onrender.com/books").then(
        (response) => {
          return response.json();
        }
      );
    } catch (error) {
      console.warn(error);
    }
  }
  addBook(data) {
    try {
      return fetch("https://lets-read-back.onrender.com/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response.json();
      });
    } catch (error) {
      console.warn(error);
    }
  }
  deleteBook(id) {
    try {
      return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.warn(error);
    }
  }
  sendToFriend(id, data) {
    try {
      return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.warn(error);
    }
  }
  returnBook(id, data) {
    try {
      return fetch(`https://lets-read-back.onrender.com/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.warn(error);
    }
  }
  makeNote(id, data) {
    try {
      return fetch(`https://lets-read-back.onrender.com/books/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ not: data }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    } catch (error) {
      console.warn(error);
    }
  }
}
