import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTransferBookMutation } from "../services/redux/API/booksAPI";

export const ShareBookModal = ({ active, setActive, id, title }) => {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const [transferBook] = useTransferBookMutation();

  const handleTransferBook = async (id, body) => {
    await transferBook({ id, body }).unwrap();
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
            resetField("surname");
            resetField("name");
            resetField("patronymic");
            resetField("deadline");
            handleTransferBook(id, data);
            setActive(false);
          })}
        >
          <div className="modal-header-container">
            <img
              className="modal-icon"
              src={require("../assets/icons/share.png")}
            />
            <h2>Передать книгу</h2>
          </div>
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

          <div className="cont">
            <button type="submit">Передать</button>
            <button onClick={() => setActive(false)}>Отмена</button>
          </div>
        </form>
      </div>
    </div>
  );
};
