var mongoose = require('mongoose');
var User = require('./user')
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    authorId : {type: Schema.Types.ObjectId, ref: 'User'},
    author: String,
    title: String,
    content: String,
    photo: String
})

module.exports = mongoose.model('Article', articleSchema)