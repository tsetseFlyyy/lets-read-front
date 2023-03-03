import { useForm } from "react-hook-form";
import { useMakeNoteMutation } from "../services/redux/API/booksAPI";

export const MakeNoteModal = ({ active, setActive, id, title }) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const [makeNote] = useMakeNoteMutation();

  const makeNoteButton = async (id, body) => {
    await makeNote({ id, body }).unwrap();
  };

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className="modal-content delete-modal note-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>
          <span>
            {" "}
            <img
              className="modal-icon arrow"
              style={{ transform: "rotate(0.5turn)" }}
              src={require("../assets/icons/note.png")}
            />
          </span>
          Добавить заметку к "{title}"?
        </h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            resetField("note");
            makeNoteButton(id, data);
          })}
        >
          <textarea
            {...register("note", {
              required: "Enter a note to the book",
            })}
          />
          <div className="button-wrapper">
            <button onClick={() => setActive(false)}>Отмена</button>
            <button
              type="submit"
              onClick={() => {
                //  setActive(false);
              }}
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
