import { useDeleteBookMutation } from "../services/redux/API/booksAPI";

export const ReturnFriendsBookModal = ({
  active,
  setActive,
  id,
  title,
  friendName,
}) => {
  const [deleteBook] = useDeleteBookMutation();
  const handleDeleteBook = async (id) => {
    await deleteBook(id).unwrap();
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-content delete-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>
          <span>
            {" "}
            <img
              className="modal-icon arrow"
              src={require("../assets/icons/arrow.png")}
            />
          </span>
          Вы точно хотите вернуть книгу <br></br> "{title}" <br /> ее владельцу{" "}
          <br />
          {friendName}?
        </h2>
        <div className="button-wrapper">
          <button
            onClick={() => {
              handleDeleteBook(id);
              setActive(false);
            }}
          >
            Да
          </button>
          <button onClick={() => setActive(false)}>Нет</button>
        </div>
      </div>
    </div>
  );
};
