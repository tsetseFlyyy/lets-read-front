import React from "react";
import { render, screen } from "@testing-library/react";
import { BooksTable } from "../components/BooksTable";

import * as rtkQuery from "../services/redux/API/booksAPI";
import { books } from "../__fixtures__/GetBooksFixture";

jest.mock("../services/redux/API/booksAPI");

describe("MyComponent", () => {
  it("should render data after API request", () => {
    jest.spyOn(rtkQuery, "useGetBooksQuery").mockReturnValue({ data: books });
    const tree = render(<BooksTable />);

    expect(tree).toMatchSnapshot(); // Снимок
    for (let i = 1; i <= 3; i++) {
      expect(screen.getByText(`Author${i}`)).toBeInTheDocument();
      expect(screen.getByText(`Book${i}`)).toBeInTheDocument();
    }
  });
});
