import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetBooksQuery,
  useAddBookMutation,
} from "../services/redux/API/booksAPI";

export const AddBookModal = ({ active, setActive }) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const [isChecked1, setChecked1] = useState();

  const handleChange1 = (e) => {
    setChecked1(e.target.checked);
  };

  const [addBook, isError] = useAddBookMutation();

  const handleAddBook = async (data) => {
    await addBook(data).unwrap();
  };

  return (
    <div
      className={active ? "modal active form-wrapper" : "modal form-wrapper"}
      onClick={() => setActive(false)}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);

            resetField("title");
            resetField("author");
            resetField("surname");
            resetField("name");
            resetField("patronymic");
            resetField("deadline");
            handleAddBook(data);
          })}
        >
          <div className="modal-header-container">
            <img
              className="modal-icon"
              src={require("../assets/icons/book.png")}
            />
            <h2>Добавить книгу</h2>
          </div>

          <div className="cont">
            <span>Название:</span>
            <input
              type="text"
              {...register("title", {
                required: "Enter a title of the book",
              })}
            />
          </div>
          <div className="cont">
            <span>Автор:</span>
            <input
              type="text"
              {...register("author", {
                required: "Please enter name of book",
              })}
            />
          </div>
          <div className="cont">
            <span>Это книга друга?</span>
            <input
              className="checkbox"
              type="checkbox"
              {...register("friendsbook")}
              onChange={handleChange1}
            />
          </div>
          {isChecked1 == true ? (
            <div>
              <div className="cont">
                <span>Фамилия:</span>
                <input
                  type="text"
                  {...register("surname", {
                    required: "Please enter surname of a friend",
                  })}
                />
              </div>
              <div className="cont">
                <span>Имя:</span>
                <input
                  type="text"
                  {...register("name", {
                    required: "Please enter name of a friend",
                  })}
                />
              </div>
              <div className="cont">
                <span>Отчество:</span>
                <input
                  type="text"
                  {...register("patronymic", {
                    required: "Please enter patronymic of a friend",
                  })}
                />
              </div>
              <div className="cont">
                <span>Дата возврата:</span>
                <input
                  className="deadline"
                  {...register("deadline", {
                    required: true,
                  })}
                  type={"date"}
                />
              </div>
            </div>
          ) : (
            //<div>
            //  <p>Who gave it to me?</p>
            //  <select
            //    {...register("fromfriend", {
            //      required: true,
            //    })}
            //  >
            //    {friendsArr.map((friend) => {
            //      return <option value={friend}>{friend}</option>;
            //    })}
            //  </select>
            //  <p>Deadline return:</p>
            //
            //</div>
            <></>
          )}
          <div className="cont">
            <button onClick={() => setActive(false)}>Отмена</button>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};
