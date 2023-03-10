import { Books } from "../utils/utils";
import { booksArr } from "../__fixtures__/GetBooksFixture";
import { myBook } from "../__fixtures__/AddBookFixture";
import { friendsBook } from "../__fixtures__/AddBookFixture";

//it("API testing GET Request", async () => {
//  const response = new Books();
//  var data = await response.get();
//  expect(data).toEqual(booksArr);
//});

it("Add book", async () => {
  const response = new Books();
  await response.post(myBook);
  var data = await response.get();
  expect(myBook.title).toEqual(data[data.length - 1].title);
});

it("Delete book by ID", async () => {
  const response = new Books();
  var data = await response.get();
  let booksLength = data.length;
  await response.delete("640b6ae0321c7ad30b64bc04");
  data = await response.get();
  expect(data).toHaveLength(booksLength - 1);
});
