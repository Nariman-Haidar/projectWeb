export function ListView(props) {
  let buttn = props.bookList.length > 0 ? true : false;
  return (
    <>
      {props.bookList.map((book) => {
        return (
          <div key={book.id} className="list">
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            <p>{book.volumeInfo.title}</p>
            <button onClick={() => props.removeBook(book.id)}>Remove</button>
          </div>
        );
      })}
      {buttn ? (
        <button className="btn to-left" onClick={() => props.deleteAll()}>
          delete all
        </button>
      )
      :
      (
        <h className="list"> search and add your favorite books </h>
      )}

    </>
  );
}
