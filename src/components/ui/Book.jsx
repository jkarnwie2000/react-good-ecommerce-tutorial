import React from "react";
import Rating from "./rating";
import Price from "./Price";



const Book = ( { book } ) => {
    const rating = 4;    
    return (
       <div className="book">
        <a href={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" className="book_img" />
            </figure>
        </a>
        <div className="book__title">
            <a href={`/books/${book.id}`} className="book__title--link">
            {book.title}
            </a>
        </div>
        <Rating rating={book.rating} />       
       <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div> 
    )
}
export default Book