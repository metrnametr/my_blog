import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';
import LoginPage from '../login-page';
import HomePage from '../home-page';
import NotFoundPage from '../not-found-page'
import './style.scss';
import BlogPage from '../blog-page';
import BlogItemPage from '../blog-item-page';

import SideBar from '../../components/SideBar';

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
                    <div className="main-layout container">
                        <div className="left-container">
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route path='/login' component={LoginPage} />
                                <Route exact path='/blog/:id' component={BlogItemPage} />
                                <Route path='/blog/page/:countPage' component={BlogPage} />
                                <Route path='/blog' component={BlogPage} />                                
                                <Route component={NotFoundPage} />
                            </Switch>
                        </div>
                        <div className="right-container">
                            <SideBar />
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}

const conn = new WebSocket('ws://localhost:3001/echo')
conn.onmessage = function(e){ console.log(e.data); };
conn.onopen = () => console.log('qweqw');

export default App;