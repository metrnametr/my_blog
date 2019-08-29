import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Blog from '../../quiries/blog';
const blog = new Blog();

class BlogItemPage extends Component {
    state = {
        item: {

        },
        loading: false,
        body: '',
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
                body: item.body,
            })
        }
    }
    render() {
        const { loading, body } = this.state;
        if (loading) {
            return <div>Loading</div>
        }
        return (
            <div>   
                <div dangerouslySetInnerHTML={{ __html: body }}/>
            </div>
        )
    }
}

export default withRouter(BlogItemPage);