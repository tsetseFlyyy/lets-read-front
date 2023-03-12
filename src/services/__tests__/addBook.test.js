import { Books } from "../utils/utils";
import { myBook } from "../__fixtures__/AddBookFixture";
import { friendsBook } from "../__fixtures__/AddBookFixture";

it("Add a book", async () => {
  const response = new Books();
  await response.addBook(myBook);
  var data = await response.get();
  expect(myBook.title).toEqual(data[data.length - 1].title);
});
