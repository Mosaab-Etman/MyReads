import React, { useState } from 'react';
import './Search.scss';
import { debounce } from 'lodash';
import { search } from '../../BooksAPI'
import SearchBar from '../components/SearchBar';
import Book from '../components/Book';

const Search = () => {

    const [ books, setBooks ] = useState(null);
    const [ notFound, setNotFound ] = useState('');

    // Handle the returned data from API
    const handleData = data => {
        Array.isArray(data) ? setBooks(data) :
            setBooks(null)
            setNotFound('No books match the search term')  
    }

    // Searching API function onInput change
    const onInputChange = debounce((term) => {
        search(term).then(data => handleData(data))
    }, 700)

    // Rendure Returned books in the HTML
    const rendureBooks = () => {
        if (books) {
            return books.map(book => {
                return book.imageLinks && <div className="col-sm-4 col-md-3 col-lg-2">
                    <Book book={book} key={book.id}/></div>
            }) 
        }
        return <p className="search_error">{notFound}</p>  
    }

    return (
        <div className="search">
            <SearchBar onInputChange={onInputChange}/>
            <div className="search_response">
                <div className="row">
                    {rendureBooks()}
                </div>
            </div>
        </div>
    )
}

export default Search;