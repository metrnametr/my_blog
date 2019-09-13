import React from 'react';
import Blog from '../../quiries/blog';
import BlogList from '../../components/BlogList';
import BlogPagination from '../../components/BlogPagination';
import withFetch from '../../components/hoc/withFetch';

const blog = new Blog();
const BlogPage = ({ data, loading }) => {
    const { blogItems, count } = data;
    if (!blogItems) {
        return <div>loading</div>
    }
    return (
        <>
            <BlogList itemsBlog={blogItems} />
            <BlogPagination countPage={count} />
        </>
    )
}

export default withFetch(BlogPage)(blog.getItemsPage);