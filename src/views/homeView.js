import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "../slick.css";
import "../slick-theme.css";

export function HomeResultsView(props) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <Slider {...props.settings}>
        {props.searchResults !== null &&
          props.searchResults?.map((book) => (
            <div key={book.id}>
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                onClick={(e) => {
                  props.bookChosen(book.id);
                  navigate("/details");
                }}
                alt=""
                className="home-book"
              />
            </div>
          ))}
      </Slider>
    </div>
  );
}
