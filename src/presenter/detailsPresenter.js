import { useModelProperty } from "../js/useModelProperty";
import { promiseNoData } from "../js/promiseNoData.js";
import { DetailsView } from "../views/detailsView.js";
import { useState } from "react";

export function DetailsPresenter(props) {
  const [more, setMore] = useState(false);

  const currentBook = useModelProperty(props.model, "currentBook");
  const data = useModelProperty(props.model, "currentBookDetails");
  const error = useModelProperty(props.model, "currentBookError");
  const user = useModelProperty(props.model, "user");
  const books = useModelProperty(props.model, "books");

  return (
    promiseNoData(currentBook, data, error) || (
      <DetailsView
        readMore={more}
        book={data}
        login={user ? true : false}
        isBookInList={books.find((book) => book.id === currentBook)}
        setReadMore={() => setMore(!more)}
        bookAdded={(bookDetails) => props.model.addToList(bookDetails)}
      />
    )
  );
}
