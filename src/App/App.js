import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyReads from './pages/MyReads';
import Search from './pages/Search';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={MyReads}/>
                <Route path='/search' component={Search}/>
                <Route path="*" component={NotFound} />
            </Switch>
            
        </BrowserRouter>
        
    )
}

export default App;