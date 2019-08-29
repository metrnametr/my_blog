import React, { Component } from 'react';
import Blog from '../../quiries/blog';
import BlogList from '../../component/BlogList';

const blog = new Blog();

class BlogPage extends Component {
    state = {
        itemsBlog: [

        ],
        error: false,
        loading: false,
    }

    componentDidMount() {
        this.fetchDataBlog();
        this.setState({
            loading: true,
        });
    }

    fetchDataBlog = async () => {
        const itemsBlog = await blog.getItems();
        if (itemsBlog) {
            this.setState({
                itemsBlog,
                loading: false,
            })
        }
    }

    render() {
        const { error, loading, itemsBlog } = this.state;
        if (error) {
            return <div>Ошибка</div>
        }
        if (loading) {
            return <div>Loading</div>
        }
        return (
            <>
                <BlogList itemsBlog={itemsBlog} />
            </>
        )
    }
}

export default BlogPage;