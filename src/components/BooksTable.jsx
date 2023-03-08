import { useGetBooksQuery } from "../services/redux/API/booksAPI";
import { DeleteBookModal } from "./DeleteBookModal";
import { ProgressLine } from "./ProgressLine";
import { useState } from "react";
import { ShareBookModal } from "./ShareBookModal";
import { ReturnFriendsBookModal } from "./ReturnFriendsBookModal";
import { ReturnMyBookModal } from "./ReturnMyBookModal";
import { MakeNoteModal } from "./MakeNoteModal";

export const BooksTable = () => {
  const { data = {}, isLoading } = useGetBooksQuery();
  const [title, setTitle] = useState();
  const [id, setID] = useState();
  const [friendName, setFriendName] = useState();
  const [DeleteBookModalActive, setDeleteBookModalActive] = useState(false);
  const [shareBookModalActive, setShareBookModalActive] = useState(false);
  const [returnFriendsBookModal, setReturnFriendsBookModalActive] =
    useState(false);
  const [returnMyBookModalActive, setReturnMyBookModalActive] = useState(false);
  const [makeNoteModalActive, setMakeNoteModalActive] = useState(false);

  if (isLoading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <div id="books-table">
      <div className="books-table-header">
        <div className="header-wrapper">
          <h3>#</h3>
        </div>
        <div className="header-wrapper">
          <h3>Title</h3>
        </div>
        <div className="header-wrapper">
          <h3>Author</h3>
        </div>
        <div className="header-wrapper">
          <h3>Progress</h3>
        </div>
        <div className="header-wrapper">
          <h3>Action</h3>
        </div>
      </div>
      {data != null && data.length > 0 ? (
        data.map((book, index) => {
          return (
            <div className="books-table-item" key={index}>
              <div className="header-wrapper">
                <h3>{index + 1}</h3>
              </div>
              <div className="header-wrapper">
                <h3>{book.title}</h3>
              </div>
              <div className="header-wrapper">
                <h3>{book.author}</h3>
              </div>
              <div className="header-wrapper progress">
                <ProgressLine
                  progress={book.progress}
                  total_pages={book.total_pages}
                />
              </div>
              <div className="header-wrapper">
                <img
                  className="action-icon"
                  src={require("../assets/icons/delete.png")}
                  onClick={() => {
                    setDeleteBookModalActive(true);
                    setID(book._id);
                    setTitle(book.title);
                  }}
                />
                {!book.friendsbook && book.name == "" ? (
                  <img
                    className="action-icon"
                    src={require("../assets/icons/share.png")}
                    onClick={() => {
                      setShareBookModalActive(true);
                      setID(book._id);
                      setTitle(book.title);
                    }}
                  />
                ) : (
                  <></>
                )}
                {!book.friendsbook && book.name != "" ? (
                  <img
                    className="action-icon arrow"
                    style={{ transform: "rotate(0.5turn)" }}
                    src={require("../assets/icons/arrow.png")}
                    onClick={() => {
                      setReturnMyBookModalActive(true);
                      setID(book._id);
                      setTitle(book.title);
                    }}
                  />
                ) : (
                  <></>
                )}
                {book.friendsbook && book.name != "" ? (
                  <img
                    className="action-icon arrow"
                    src={require("../assets/icons/arrow.png")}
                    onClick={() => {
                      setReturnFriendsBookModalActive(true);
                      setID(book._id);
                      setTitle(book.title);
                      let fullname =
                        book.surname + " " + book.name + " " + book.patronymic;
                      setFriendName(fullname);
                    }}
                  />
                ) : (
                  <></>
                )}
                <img
                  className="action-icon"
                  src={require("../assets/icons/note.png")}
                  onClick={() => {
                    setMakeNoteModalActive(true);
                    setID(book._id);
                    setTitle(book.title);
                  }}
                />
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
      {/*<DeleteBookModal
        active={DeleteBookModalActive}
        setActive={setDeleteBookModalActive}
        id={id}
        title={title}
      />
      <ShareBookModal
        active={shareBookModalActive}
        setActive={setShareBookModalActive}
        id={id}
        title={title}
      />
      <ReturnFriendsBookModal
        active={returnFriendsBookModal}
        setActive={setReturnFriendsBookModalActive}
        id={id}
        title={title}
        friendName={friendName}
      />
      <ReturnMyBookModal
        active={returnMyBookModalActive}
        setActive={setReturnMyBookModalActive}
        id={id}
        title={title}
      />
      <MakeNoteModal
        active={makeNoteModalActive}
        setActive={setMakeNoteModalActive}
        id={id}
        title={title}
      />*/}
    </div>
  );
};
