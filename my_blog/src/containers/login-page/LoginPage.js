import React, { Component } from 'react'
import LoginForm from '../../component/LoginForm';
import JoinForm from '../../component/JoinForm';
import { Link, Redirect, Route } from 'react-router-dom';

class LoginPage extends Component {

    componentDidMount() {
        
    }   

    render() {
        return (
            <div>
                <Route path="/login/sign-in" component={LoginForm} />
                <Route path="/login/join" component={JoinForm} />
            </div>
        )
    }
}

export default LoginPage;