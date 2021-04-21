import React from 'react';
import { Link } from 'react-router-dom';

const SearchBar = ({onInputChange}) => {

    return (
        <div className="search_top">
            <div className="search_bar">
                <Link to="/">
                    <img className="search_back" src="./assets/arrow-back.svg" alt="arrow-back"/>
                </Link>
                <input className="search_input" type="text" 
                onChange={e => onInputChange(e.target.value)}
                placeholder="I am looking for..."/>
            </div>
        </div>
    )
}

export default SearchBar;