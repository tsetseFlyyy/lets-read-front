import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  tagTypes: ["Books"],
  //  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://lets-read-back.onrender.com/",
  }),
  endpoints: (build) => ({
    getBooks: build.query({
      query: () => `books`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Books", id })),
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    addBook: build.mutation({
      query: (body) => ({
        url: "books",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Books", id: "LIST" }],
    }),
    returnBook: build.mutation({
      query: (data) => (
        console.log(data),
        {
          url: `books/${data.id}`,
          method: "PUT",
          body: data.body,
        }
      ),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Books", id },
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    transferBook: build.mutation({
      query: (data) => (
        console.log(data),
        {
          url: `books/${data.id}`,
          method: "PUT",
          body: data.body,
        }
      ),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Books", id },
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
    makeNote: build.mutation({
      query: (data) => (
        console.log(data),
        console.log(JSON.stringify({ not: data.body.note }), "JSON STRING"),
        {
          url: `books/notes/${data.id}`,
          method: "PUT",
          body: JSON.stringify({ not: data.body.note }),
        }
      ),
      invalidatesTags: (result, error, { id }) =>
        result
          ? [
              { type: "Books", id },
              { type: "Books", id: "LIST" },
            ]
          : [{ type: "Books", id: "LIST" }],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useReturnBookMutation,
  useTransferBookMutation,
  useMakeNoteMutation,
} = booksApi;
