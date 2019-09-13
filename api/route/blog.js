const { Router } = require('express');
const Blog = require('../models/Blog');
const mockData = require('../data/blogItems');

const route = Router();

route.get('/', async (req, res) => {
    const blog = new Blog({
        date: new Date(),
        countLike: 0,
        img: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=730&crop=1",
        title: "qqweqwe 1231 2123 123 1 qwe qweqweqw qweqw qwe qwqe qwq",
        description: "lorem ispalodrem  qweqwe qweqw qweqw qweqw eqweq wqwe qweqw qweqw eqweqweqispalorem ispa lorem ispa lorem ispa lorem ispa lorem ispa",
        body: "<h1>Новые веяния кафкианской эпохи</h1>"
    })
    const items = await Blog.find();
    // await blog.save()

    res.send(items)
})

route.get('/page/:numberPage', async (req, res) => {
    const { numberPage } = req.params;
    const items = await Blog.find();
    const countSkip = 3;
    const skip = numberPage * countSkip;
    const resItems = items.slice(skip, countSkip + skip)
    res.send(resItems)
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