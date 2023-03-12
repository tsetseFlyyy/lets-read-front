import { Books } from "../utils/utils";
import { body } from "../__fixtures__/MakeNoteFixture";

it("Make a note by ID", async () => {
  const response = new Books();
  var data = await response.get();
  const id = "640dc8f390978bc56f47c44c";
  let index = 0;
  data.map((book) => {
    if (
      (book._id != id || book.friendsbook != false || book.name,
      book.surname,
      book.patronymic != "")
    ) {
      return;
    }
  });
  await response.makeNote(id, body.note);
  data = await response.get();
  data.map((book, i) => {
    if (book._id == id) {
      index = i;
      console.warn(i);
      console.warn(index);
    }
  });
  expect(data[index].notes[data[index].notes.length - 1]).toBe(body.note);
});
