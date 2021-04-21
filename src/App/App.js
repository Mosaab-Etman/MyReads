import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import MyReads from './pages/MyReads';
import Search from './pages/Search';

const App = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={MyReads}/>
            <Route path='/search' component={Search}/>
        </BrowserRouter>
        
    )
}

export default App;