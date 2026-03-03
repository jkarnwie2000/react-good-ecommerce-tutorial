import React from "react";
import Rating from "./rating";



const Book = ( {book} ) => {
    const rating = 4;

    
    return (
       <div className="book">
        <a href="/books/1">
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" className="book_img" />
            </figure>
        </a>
        <div className="book__title">
            <a href="/books/1" className="book__title--link">
            {book.title}
            </a>
        </div>
        <Rating rating={book.rating} />       
        <div className="book__price">
        {
         book.salePrice ? (
        
        <><span className="book__price--normal">${book.originalPrice.toFixed(2)}</span>
        ${book.salePrice.toFixed(2)}</>
        ) : ( 
            <>${book.originalPrice.toFixed(2)}</>        
        )}            
        </div>
    </div> 
    )
}

export default Book