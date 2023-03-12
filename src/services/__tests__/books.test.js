import { Books } from "../utils/utils";
import { booksArr } from "../__fixtures__/GetBooksFixture";
import { myBook } from "../__fixtures__/AddBookFixture";
import { friendsBook } from "../__fixtures__/AddBookFixture";
import { body } from "../__fixtures__/ShareBookFixture";

//it("API testing GET Request", async () => {
//  const response = new Books();
//  var data = await response.get();
//  expect(data).toEqual(booksArr);
//});

//it("Add a book", async () => {
//  const response = new Books();
//  await response.addBook(myBook);
//  var data = await response.get();
//  expect(myBook.title).toEqual(data[data.length - 1].title);
//});

//it("Delete a book by ID", async () => {
//  const response = new Books();
//  var data = await response.get();
//  let booksLength = data.length;
//  await response.deleteBook("640dc90190978bc56f47c44d");
//  data = await response.get();
//  expect(data).toHaveLength(booksLength - 1);
//});

it("Share my book by ID", async () => {
  const response = new Books();
  var data = await response.get();
  const id = "640dd1854bd84f29d5a2e63e";
  let index = 0;
  data.map((book, i) => {
    if (
      (book._id != id || book.friendsbook != false || book.name,
      book.surname,
      book.patronymic != "")
    ) {
      return;
    }
  });
  await response.sendToFriend(id, body);
  data = await response.get();
  data.map((book, i) => {
    if (book._id == id) {
      index = i;
      console.warn(i);
      console.warn(index);
    }
  });
  expect(data[index].name).toBe(body.name);
  expect(data[index].surname).toBe(body.surname);
  expect(data[index].patronymic).toBe(body.patronymic);
  expect(data[index].deadline).toBe(body.deadline);
});
