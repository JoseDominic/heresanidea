const mongoose = require('mongoose');

//Diary schema
const postSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  authorname:{
    type:String,
    required:true
  },
  body:{
    type:String,
    required:true
  },
  date:{type:Date,required:true},
  public:false,
  img:{},

});


const Post = mongoose.model('Post',postSchema );
module.exports = Post
