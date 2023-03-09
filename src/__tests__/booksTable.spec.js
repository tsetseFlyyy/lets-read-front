import { useGetBooksQuery } from "../services/redux/API/booksAPI";
import { booksApi } from "../services/redux/API/booksAPI";
import { act, renderHook } from "@testing-library/react";
import { BooksTable } from "../components/BooksTable";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
//import * as rtkQuery from "../services/redux/API/booksAPI";

const updateTimeout = 5000;

jest.mock("../services/redux/API/booksAPI");

describe("Data", () => {
  beforeEach(() => {
    useGetBooksQuery.mockClear();
  });

  it("should create BooksTable with books", async () => {
    const data = [
      {
        author: "John Doe",
        title: "The Big Deal",
        friendsbook: false,
      },
    ];
    useGetBooksQuery.mockReturnValueOnce(data);
    const tree = render(<BooksTable />);
    expect(tree).toMatchSnapshot();
  });

  //  it("Success", async () => {
  //    fetchMock.mockResponse(JSON.stringify([]));
  //    const { result, waitForNextUpdate } = renderHook(
  //      () => useGetBooksQuery(undefined),
  //      { wrapper }
  //    );
  //    const initialResponse = result.current;
  //    console.log(initialResponse);
  //    expect(initialResponse.data).toBeUndefined();
  //    expect(initialResponse.isLoading).toBe(true);
  //    await waitForNextUpdate({ timeout: updateTimeout });
  //    const nextResponse = result.current;
  //    expect(nextResponse.data).not.toBeUndefined();
  //    expect(nextResponse.isLoading).toBe(false);
  //    expect(nextResponse.isSuccess).toBe(true);
  //  });
  //  const useGetBooksQueryMock = jest.spyOn(rtkQuery, "useGetBooksQuery");
  //  beforeEach(() => {
  //	useGetBooksQueryMock.mockClear();
  //  });
  //  it("should create BooksTable with empty books", () => {
  //    useGetBooksQuery.mockReturnValue([]);
  //    const tree = render(<BooksTable />);
  // console.log("length: ", data.length);
  // expect(data).toHaveLength(0);
  //    expect(tree).toMatchSnapshot();
  //  });
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
