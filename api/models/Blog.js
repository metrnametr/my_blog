const { Schema, model, SchemaTypes } = require('mongoose');

const blogSchema = new Schema({
    id: {
        type: SchemaTypes.ObjectId,
    },
    date: {
        type: SchemaTypes.Date,
    },
    img: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    }
})

module.exports = model('Blog', blogSchema);