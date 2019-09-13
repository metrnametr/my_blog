import React from 'react';
import { Link } from 'react-router-dom';
import { times } from 'lodash';
import './style.scss';

const blogItem = ({ item }) => {
    const {
        _id, date, title, countLike, description, img,
    } = item;
    const id = _id;
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
                    <div className="content_info">
                        <div className="content_info--date">
                            <span className="date">03.12.2019</span>
                            <span className="time">15:00</span>
                        </div>
                        <div className="content_info--likes">
                            <span className="like">Like: </span>
                            <span className="like-count">{countLike}</span>
                        </div>
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