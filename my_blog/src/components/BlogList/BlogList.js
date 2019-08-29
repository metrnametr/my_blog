import React, { Component } from 'react';
import BlogItem from '../BlogItem';
import './style.scss';

const blogList = ({ itemsBlog }) => {
    console.log(itemsBlog)
    return(
        <div className="blog-container">
            {
                itemsBlog.map(it => <BlogItem key={it.id} item={it} />)
            }
        </div>
    )
}

export default blogList;