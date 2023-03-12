import { Books } from "../utils/utils";
import { booksArr } from "../__fixtures__/GetBooksFixture";

import { body } from "../__fixtures__/ReturnBookFixture";

//it("API testing GET Request", async () => {
//  const response = new Books();
//  var data = await response.get();
//  expect(data).toEqual(booksArr);
//});

it("Return my book by ID", async () => {
  const response = new Books();
  var data = await response.get();
  const id = "640dd0924bd84f29d5a2e63c";
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
  await response.returnBook(id, body);
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
