import { Books } from "../utils/utils";
import { myBook } from "../__fixtures__/AddBookFixture";
import { friendsBook } from "../__fixtures__/AddBookFixture";

describe("Add book - Test", () => {
  it("Add my book", async () => {
    const response = new Books();
    await response.addBook(myBook);
    var data = await response.get();
    expect(myBook.title).toEqual(data[data.length - 1].title);
  });

  it("Add a friend's book", async () => {
    const response = new Books();
    await response.addBook(friendsBook);
    var data = await response.get();
    expect(friendsBook.title).toEqual(data[data.length - 1].title);
  });
});
