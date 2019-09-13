import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { fill } from 'lodash';
import BlogPagintaionItem from '../BlogPaginationItem';
import './style.scss';

const BlogPagintaion = ({ countPage, activePage = 1, history, match }) => {
    const { params } = match;
    const urlCount = params.countPage;
    const paginationCount = Math.round(countPage / 3);
    const count = fill(Array(paginationCount));
    const [active, setActivePage] = useState((urlCount) ? urlCount : activePage)
    const togglePagination = (i) => {
        console.log(active)
        setActivePage(i)
        history.push(`/blog/page/${i}`)
    }
    console.log(urlCount)
    return (
        <ul className="pagination">
            <li
                onClick={() => togglePagination(active - 1)}
                className="pagination-item previos" 
                style={{ display: (urlCount - 1) ? 'block' : 'none' }}
            >
                prev
            </li>
            {
                count.map((it, i) => {
                    return <BlogPagintaionItem
                        it={it}
                        index={i}
                        togglePagination={togglePagination}
                        active={active}
                    />
                })
            }
        </ul>
    )
}

export default withRouter(BlogPagintaion);