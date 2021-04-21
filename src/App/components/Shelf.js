import React from 'react';
import './Shelf.scss';
import Book from './Book';

const Shelf = ({header, books}) => {
    return (
        <div className="shelf">
            <div className="container">
                <h3 className="shelf_header">{header}</h3>
                <hr className="shelf_header-hr"/>
                <div className='row justify-content-center'>{books.map(book => {
                    return <Book book={book} key={book.id}/>
                })}</div>
            </div>
        </div>
    )
}

export default Shelf;