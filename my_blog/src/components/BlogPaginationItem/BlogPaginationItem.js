import React from 'react';


const blogPaginationItem = ({ togglePagination, active, it, index}) => {
    return (
        <li onClick={() => togglePagination(index)}
                        className={ (active - 1 === index) ? "pagination-item active" : 'pagination-item' }
                    >{ index += 1 }</li>
    )
}

export default blogPaginationItem;