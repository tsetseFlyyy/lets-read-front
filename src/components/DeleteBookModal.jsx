import { useDeleteBookMutation } from "../services/redux/API/booksAPI";

export const DeleteBookModal = ({ active, setActive, id, title }) => {
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
        <h2 style={{ display: "block" }}>
          <span className="exclamation-mark">!</span>Вы точно хотите удалить
          книгу <br></br> "{title}"?
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
