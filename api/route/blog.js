const { Router } = require('express');
const Blog = require('../models/Blog');
const mockData = require('../data/blogItems');

const route = Router();

route.get('/', async (req, res) => {
    // const blog = new Blog({
    //     img: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1",
    //     title: "qqweqweq",
    //     description: "lorem ispalorem ispalorem ispa lorem ispa lorem ispa lorem ispa lorem ispa",
    //     body: "<h1>Новые веяния кафкианской эпохи</h1>"
    // })
    const items = await Blog.find();
    // await blog.save()

    res.send(items)
})

route.get('/:id', async (req, res) => {
    const { id } = req.params;
    Blog.findById(id)
        .then(item => res.send(item))
        .catch(e => console.log(e))
    // console.log(item)
    // res.send(...item)
})

module.exports = route;