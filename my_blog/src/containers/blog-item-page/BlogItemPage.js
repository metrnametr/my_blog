import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Blog from '../../quiries/blog';
const blog = new Blog();

class BlogItemPage extends Component {
    state = {
        item: {

        },
        loading: false,
        text: '',
    }
    componentDidMount() {
        this.fetchItem();
        this.setState({
            loading: true,
        });
    }

    fetchItem = async () => {
        const { match } = this.props;
        const { id } = match.params;
        const item = await blog.getItemsById(id);
        if (item) {
            this.setState({
                item,
                loading: false,
                text: item.text,
            })
        }
    }
    render() {
        const { text } = this.state;
        return (
            <div>   
                <div dangerouslySetInnerHTML={{ __html: text }}/>
            </div>
        )
    }
}

export default withRouter(BlogItemPage);