import { useModelProperty } from "../js/useModelProperty";
import { ListView } from "../views/listView.js";

export function ListPresenter(props) {
  const books = useModelProperty(props.model, "books");

  return (
    <div>
      <ListView
        bookList={books}
        removeBook={(id) => props.model.removeFromList(id)}
        deleteAll={() => props.model.setBooks([])}
      />
    </div>
  );
}
