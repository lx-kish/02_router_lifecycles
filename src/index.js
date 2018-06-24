import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    Header
                </header>
                <Route path="/" exact component={Home}/>
                <Route path="/posts" component={Posts} />
                <Route path="/profile" component={Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)