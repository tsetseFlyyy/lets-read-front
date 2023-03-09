import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useGetBooksQuery } from "../services/redux/API/booksAPI"; // RTK Query API
import { Component } from "../components/Component";
import { BooksTable } from "../components/BooksTable";

import * as rtkQuery from "../services/redux/API/booksAPI";

jest.mock("../services/redux/API/booksAPI");

const mockData = [
  {
    author: "author1",
    title: "my book1",
    friendsbook: false,
  },
  {
    author: "author2",
    title: "my book2",
    friendsbook: false,
  },
  {
    author: "author3",
    title: "my book3",
    friendsbook: false,
  },
];

describe("MyComponent", () => {
  it("should render data after API request", () => {
    jest
      .spyOn(rtkQuery, "useGetBooksQuery")
      .mockReturnValue({ data: mockData });
    const tree = render(<BooksTable />);

    // Check that loading state is not displayed
    // expect(screen.queryByText("Loading...")).toBeNull();
    expect(tree).toMatchSnapshot();
    // Check that data is displayed correctly
    // expect(screen.getByText("author")).toBeInTheDocument();
    // expect(screen.getByText("my book")).toBeInTheDocument();
  });
});
