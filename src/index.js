import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profiles';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/posts">Posts</Link><br/>
                    <Link to={{
                        pathname:'/profile'
                    }}>Profile</Link><br/>
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