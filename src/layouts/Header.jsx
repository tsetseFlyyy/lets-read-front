import { AddBookModal } from "../components/AddBookModal";
import { useState } from "react";

export const Header = () => {
  const [AddBookModalActive, setAddBookModalActive] = useState(false);
  return (
    <div id="header" className="width-50">
      <div className="flex-row">
        <img className="site-icon" src={require("../assets/icons/book.png")} />
        <h1 className="site-title">Let's Read!</h1>
      </div>
      <div
        className="add-book-button"
        onClick={() => setAddBookModalActive(true)}
      >
        Add Book
      </div>
      <AddBookModal
        active={AddBookModalActive}
        setActive={setAddBookModalActive}
      />
    </div>
  );
};
