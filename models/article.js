const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { 
        type: String,
        unique: true,
    },
    url: {
        type: String,
    },
    pubDate: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
}, {
    timestamps: true,
});


module.exports = mongoose.model('Article', articleSchema);