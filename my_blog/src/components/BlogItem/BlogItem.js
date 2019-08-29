import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const blogItem = ({ item }) => {
    const { id, title, description, img } = item;
    return (
        <div className="block_item">
            <Link to={`/blog/${id}`}>
                <div className="block--image">
                    <img src={img} alt="" />
                </div>
                <div className="block--content">
                    <div className="content_title">
                        <h2>{title}</h2>
                    </div>
                    <div className="content_description">
                        <p>{description}...</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default blogItem;