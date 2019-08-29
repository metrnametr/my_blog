import axios from 'axios';

class Blog{

    async getItems(){
        const res = await axios.get('http://localhost:3001/blog', {
            method: 'get',
        })
        return res.data;
    }

    async getItemsById(id){
        const res = await axios.get(`http://localhost:3001/blog/${id}`, {
            method: 'get',
        })
        return res.data;
    }
}

export default Blog;