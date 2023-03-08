import { useGetBooksQuery } from "../services/redux/API/booksAPI";

import { BooksTable } from "../components/BooksTable";
import { render } from "@testing-library/react";
//import * as rtkQuery from "../services/redux/API/booksAPI";

jest.mock("../services/redux/API/booksAPI");
//jest.mock("https://lets-read-back.onrender.com/books");

describe("Data", () => {
  //  const useGetBooksQueryMock = jest.spyOn(rtkQuery, "useGetBooksQuery");

  //  beforeEach(() => {
  //	useGetBooksQueryMock.mockClear();
  //  });

  it("should create BooksTable with empty books", () => {
    useGetBooksQuery.mockReturnValue([]);
    const tree = render(<BooksTable />);
    // console.log("length: ", data.length);
    // expect(data).toHaveLength(0);
    expect(tree).toMatchSnapshot();
  });

  it("should create BooksTable with books", () => {
    useGetBooksQuery.mockReturnValue();
    const tree = render(<BooksTable />);
    expect(tree).toMatchSnapshot();
  });

  //  it("should check the data's length", () => {
  /*
  const res = await fetch('https://lets-read-back.onrender.com/books');
  const result = await res.json();
  console.log(result)
  expect(result.name).toBe('');  
  */
  // useGetBooksQuery.mockReturnValue();
  // fetchMock.mockResponse(JSON.stringify([]));
  // const data = useGetBooksQuery();
  // expect(data).toBeUndefined();
  //  });
});
