import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.scss';

const headerMenu = (props) => {
    const { location: { pathname } } = props;

    return (
        <div className="my-head--menu">
            <ul>
                <li className={(pathname == '/') ? 'active' : ''}><Link to="/">Home</Link></li>
                <li className={(pathname == '/branch') ? 'active' : ''}><Link to="/branch">Branch</Link></li>
                <li className={(pathname == '/blog') ? 'active' : ''}><Link to="/blog">Blog</Link></li>
                <li className={(pathname == '/crypto') ? 'active' : ''}><Link to="/crypto">Crypto</Link></li>
            </ul>
        </div>  
    )
}

export default withRouter(headerMenu);