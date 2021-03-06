const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const blogRoute = require('./route/blog');

const expressWs = require('express-ws')
const port = process.env.PORT || 3001;
const user = process.env.ADMIN_NAME;
const password = process.env.ADMIN_PASSWORD;
console.log(password)
const app = express();
expressWs(app)


app.use(cors());

app.use('/blog', blogRoute);

app.ws('/echo', (ws, req) => {
    ws.on('message', msg => {
        ws.send(msg)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})


app.listen(port, () => {
    try{
        mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-sxyuu.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })
    } catch(e) {
        console.log(e)
    }
});