import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderMenu from '../../component/HeaderMenu';
import LoginPage from '../login-page';
import HomePage from '../home-page';
import NotFoundPage from '../not-found-page'
import './style.css';
import BlogPage from '../blog-page';
import BlogItemPage from '../blog-item-page';

class App extends Component {

    render() {
        return (
            <div                 
                style={
                    {
                        height: "100vh",
                        alignItems: "center",
                        fontSize: '2em',
                    }
                }
            >                
                <Router>
                    <HeaderMenu />
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='/login' component={LoginPage} />
                        <Route path='/blog/:id' component={BlogItemPage} />
                        <Route path='/blog' component={BlogPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;