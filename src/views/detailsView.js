import { useNavigate } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import Stars from "react-stars-display";
import defaultt from "../default.png";

export function DetailsView(props) {
  const navigate = useNavigate();
  const info = props.book.volumeInfo;

  return (
    <section className="book-section">
      <div className="details-book">
        <div>
          <img
            src={
              info.imageLinks === undefined
                ? defaultt
                : info.imageLinks.thumbnail
            }
            alt={info.title}
          />

          <div>
            {props.isBookInList === undefined ? (
              <button
                className="btn"
                onClick={(e) => {
                  props.login && props.bookAdded(props.book);
                  !props.login && navigate("/login");
                }}
              >
                Add to list!
              </button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="book-info">
          <div>
            <span>title: </span>
            {info.title}
            {info.subtitle && <span>: {info.subtitle}</span>}
          </div>
          {info.language === undefined ? (
            ""
          ) : (
            <div>
              <span>language: </span>
              {info.language === "en" ? "english" : info.language}
            </div>
          )}

          {info.authors === undefined ? (
            ""
          ) : (
            <div>
              <span>
                author<span style={{ textTransform: "lowercase" }}>(s)</span>:{" "}
              </span>
              <ul>
                {info.authors.map((author, index) => {
                  return author ? <li key={index}>{author}</li> : null;
                })}
              </ul>
            </div>
          )}

          {info.industryIdentifiers === undefined ? (
            ""
          ) : (
            <div>
              <span>ISBN: </span>
              {info.industryIdentifiers[0].identifier} ,{" "}
              {info.industryIdentifiers[1].identifier}
            </div>
          )}

          {info.categories === undefined ? (
            ""
          ) : (
            <div>
              <span>
                genre
                <span style={{ textTransform: "none" }}>(s)</span>:{" "}
              </span>
              <ul>
                {info.categories.map((cat, index) => {
                  return cat ? <li key={index}>{cat}</li> : null;
                })}
              </ul>
            </div>
          )}

          {info.description === undefined ? (
            ""
          ) : (
            <div>
              <span>description: </span>
              <div style={{ textTransform: "none", display: "inline" }}>
                <LinesEllipsis
                  style={{ display: "inline" }}
                  text={info.description.replace(/<(.|\n)*?>/g, "")}
                  maxLine={`${props.readMore ? "100" : "3"}`}
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                />
              </div>
              <button
                className="btn read-more"
                type="button"
                onClick={() => props.setReadMore()}
              >
                {props.readMore ? "read less" : "read more"}
              </button>
            </div>
          )}

          {info.publisher === undefined ? (
            ""
          ) : (
            <div>
              <span>publisher: </span>
              {info.publisher}
            </div>
          )}

          {info.publishedDate === undefined ? (
            ""
          ) : (
            <div>
              <span>publication date: </span>
              {info.publishedDate}
            </div>
          )}

          <div>
            {info.averageRating === undefined ? null : (
              <span>
                <span>Customer Reviews: </span>
                <Stars stars={info.ratingsCount} size={20} />
              </span>
            )}
          </div>

          {info.pageCount === undefined ? (
            ""
          ) : (
            <div>
              <span>no page: </span>
              {info.pageCount} pages
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
