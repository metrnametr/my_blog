import React, { Component } from 'react';
import { isEmpty } from 'lodash';
const withFetch = WrappedComponent => (methodFetch, ...params) => {
    return class extends Component {
        state = {
            error: false,
            loading: true,
        }
    
        componentDidMount() {
            this.fetchDataBlog();
            this.setState({
                loading: true,
            });
        }

        componentDidUpdate(prevProps) {
            const { match: { params } } = this.props;
            const { countPage } = params;
            if (countPage !== prevProps.match.params.countPage) {
                this.fetchDataBlog();
                this.setState({
                    loading: true,
                });
            }
        }
    
        fetchDataBlog = async () => {
            const data = await methodFetch(...params, this.props);
            if (!isEmpty(data)) {
                this.setState({
                    data,
                    loading: false,
                })
            }
        }

        render() {
            const { loading, error, data } = this.state;
            console.log(data)
            if (loading) {
                return <div>loading</div>
            }
            if (error) {
                return <div>error</div>
            }
            
            return (
                <WrappedComponent loading={loading} data={data} {...this.props}/>
            )
        }
    }
}

export default withFetch;