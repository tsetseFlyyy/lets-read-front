import { BooksTable } from "./BooksTable";

export const BooksContainer = () => {
  return (
    <div id="books-container">
      <h2 className="books-container-title">Books</h2>
      <BooksTable />
    </div>
  );
};
