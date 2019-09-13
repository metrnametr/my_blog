import axios from 'axios';

class Blog{

    static async getItems(){
        const res = await axios.get('http://localhost:3001/blog', {
            method: 'get',
        })
        const count = res.data.length;
        const { data } = res
        return {
            blogItems: data,
            count,
        };
    }

    async getItemsPage(pageNumber){
        const { countPage = 0 } = pageNumber.match.params;
        const res = await axios.get(`http://localhost:3001/blog/page/${countPage}`, {
            method: 'get',
        })
        const { count } = await Blog.getItems();
        console.log(count)
        const { data } = res
        return {
            blogItems: data,
            count,
        };
    }

    async getItemsById(id){
        const res = await axios.get(`http://localhost:3001/blog/${id}`, {
            method: 'get',
        })
        return res.data;
    }
}

export default Blog;