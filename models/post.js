var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  heading: String,
  author: String,
  content: Text
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;