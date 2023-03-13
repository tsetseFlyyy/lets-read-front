//import { Books } from "../utils/utils";
//import { body } from "../__fixtures__/ShareBookFixture";

//describe("Share book - Test", () => {
//  it("Share my book by ID", async () => {
//    const response = new Books();
//    var data = await response.get();
//    const id = "640f5abce6216882afc3a67d";
//    let index = 0;
//    data.map((book) => {
//      if (
//        (book._id != id || book.friendsbook != false || book.name,
//        book.surname,
//        book.patronymic != "")
//      ) {
//        return;
//      }
//    });
//    await response.sendToFriend(id, body);
//    data = await response.get();
//    data.map((book, i) => {
//      if (book._id == id) {
//        index = i;
//        console.warn(i);
//        console.warn(index);
//      }
//    });
//    expect(data[index].name).toBe(body.name);
//    expect(data[index].surname).toBe(body.surname);
//    expect(data[index].patronymic).toBe(body.patronymic);
//    expect(data[index].deadline).toBe(body.deadline);
//  });
//});
