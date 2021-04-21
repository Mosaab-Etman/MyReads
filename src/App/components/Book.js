import React, { useEffect } from 'react';
import './Book.scss';
import Menu from './Menu';

const Book = ({book}) => {

    
    useEffect(() => {
        if (!book.shelf) {
            book.shelf = 'none'
        }
    // eslint-disable-next-line
    }, [])

    return (
        <div className='col'>
            <div key={book.id} className="book">
                <div className="book_img-wrapper">
                    <img className="book_img" src={book.imageLinks ? book.imageLinks.thumbnail : './assets/book-placeholder.png'} alt="book"/>
                    <Menu bookID={book.id}/>
                </div>
                <h6 className="book_header">{book.title}</h6>
                <p>{`by ${book.authors}`}</p>
            </div>
        </div>
    )
}

export default Book;