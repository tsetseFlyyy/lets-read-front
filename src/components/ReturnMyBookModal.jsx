import { useReturnBookMutation } from "../services/redux/API/booksAPI";

export const ReturnMyBookModal = ({ active, setActive, id, title }) => {
  const [returnBook] = useReturnBookMutation();
  let body = {
    surname: "",
    name: "",
    patronymic: "",
    deadline: "",
  };

  const returnButton = async (id) => {
    await returnBook({ id, body }).unwrap();
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
              style={{ transform: "rotate(0.5turn)" }}
              src={require("../assets/icons/arrow.png")}
            />
          </span>
          Вы точно хотите вернуть свою книгу <br></br> "{title}"?
        </h2>
        <div className="button-wrapper">
          <button
            onClick={() => {
              returnButton(id);
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
