import { Books } from "../utils/utils";
import { body } from "../__fixtures__/ReturnBookFixture";

describe("Return book - Test", () => {
  it("Return my book by ID", async () => {
    jest.setTimeout(15000);
    const response = new Books();
    var data = await response.get();
    const id = "64109917a0acad81deafba8f";
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
});
