import React, { useEffect, useState } from 'react';
import './MyReads.scss';
import { getAll } from '../../BooksAPI';
import { Link } from 'react-router-dom';
import Shelf from '../components/Shelf';

const MyReads = () => {

    // Books Shelves 
    const [ currentlyReading, setCurrentlyReading] = useState([])
    const [ wantToRead, setWantToRead ] = useState([])
    const [ read, setRead ] = useState([])

    useEffect(() => {

        // Retreive all the books on Mount
        getAll().then(books => books.forEach(book => {
            book.shelf === 'currentlyReading' ? setCurrentlyReading(prevBooks => [...prevBooks, book])
            : book.shelf === 'wantToRead' ? setWantToRead(prevBooks => [...prevBooks, book])
            : setRead(prevBooks => [...prevBooks, book])
        }))

    }, [])

    return (
        <div className="my-reads">
            <div className="my-reads_header">
                <h1>MyReads</h1>
            </div>
            <Shelf header="Currently Reading" books={currentlyReading} />
            <Shelf header="Want to Read" books={wantToRead} />
            <Shelf header="Read" books={read}/>
            <Link className="my-reads_add" to='/search'>
                <img src='./assets/add.svg' alt="add"/>
            </Link>
        </div>
        
    )
}

export default MyReads;