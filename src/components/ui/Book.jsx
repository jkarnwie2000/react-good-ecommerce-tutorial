import { Link } from "react-router-dom";
import Rating from "./rating";
import Price from "./Price";
import { useEffect } from 'react';

const Book = ({ book }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={book.url} alt="" className="book_img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
};

export default Book;