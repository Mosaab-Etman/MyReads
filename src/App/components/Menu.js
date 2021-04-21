import React, { useState, useEffect } from 'react';
import './Menu.scss';
import { update, get } from '../../BooksAPI';

const Menu = ({bookID}) => {

    const [ bookShelf, setBookShelf ] = useState(null);
    const [ book, setBook ] = useState(null);
    const [ open, setOpen ] = useState(false);

    // eslint-disable-next-line
    useEffect(() => {

        // Fetch the book by book.id
        get(bookID).then(book => {
            setBook(book)
            setBookShelf(book.shelf)
        })

        // Close Dropdown Menu on window Click 
        window.addEventListener('click', () => setOpen(false))

        // CleanUp the event of closing dropdown on window click
        return window.removeEventListener('click', () => setOpen(false))

    // eslint-disable-next-line
    }, [])

    
    // Open and Close Dropdown Menu on Icon Click
    const onIconClick = e => {
        e.stopPropagation();
        setOpen(!open)
    }

    // Change the book shelf on itemList Click
    const onItemClick = async (book, shelf) => {
        await update(book, shelf)
        setBookShelf(shelf)
        if (window.location.pathname === "/" ) {
            window.location.reload()
        }
    }

    // Toggle the check mark next to itemList
    const addMark = (shelf) => {
        return bookShelf === shelf 
        ? <img src='./assets/check-mark.svg' alt="check=mark"/> : ''
    }

    return (
        <div className="dropdown">
            <button className="dropdown_button" type="button" onClick={(e) => onIconClick(e)}>
                <img src="./assets/down-arrow.svg" className="dropdown_icon" alt="arrow"/>
            </button>
            {open && <ul className="dropdown-menu">
                <li className="dropdown-item" onClick={() => onItemClick(book, 'currentlyReading')}>{addMark('currentlyReading')} Currently Reading</li>
                <li className="dropdown-item" onClick={() => onItemClick(book, 'wantToRead')}>{addMark('wantToRead')} Want to Read</li>
                <li className="dropdown-item" onClick={() => onItemClick(book, 'read')}>{addMark('read')} Read</li>
                <li className="dropdown-item" onClick={() => onItemClick(book, 'none')}>{addMark('none')} None</li>
            </ul>}
        </div>
    )
}

export default Menu;