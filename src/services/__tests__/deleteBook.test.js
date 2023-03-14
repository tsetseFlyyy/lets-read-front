import { Books } from "../utils/utils";
import { id } from "../__fixtures__/DeleteBookFixture";

describe("Delete book - Test", () => {
  it("Delete a book by ID", async () => {
    jest.setTimeout(15000);
    const response = new Books();
    var data = await response.get();
    await response.deleteBook(id);
    data = await response.get();
    let deleted = true;
    data.map((book) => {
      if (book._id == id) {
        deleted = false;
      }
    });
    expect(deleted).toBe(true);
  });
});
