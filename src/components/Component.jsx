export const Component = () => {
  const data = [
    {
      author: "author",
      title: "title",
      friendsbook: false,
    },
  ];
  return (
    <div>
      {data.map((book) => {
        return (
          <div>
            <h2>{book.author}</h2>
            <h2>{book.title}</h2>
          </div>
        );
      })}
    </div>
  );
};
