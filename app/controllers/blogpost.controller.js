'use strict'

const BlogPost = require('../models/blogpost.model');

//create a new blog post 
exports.publishPost = (req, res) => {
    const NewBlogPost = new BlogPost(req.body);
    NewBlogPost.save((err, blogPost) =>{
        if(err){
            return res.status(422).json({
                msg:'Server encountered an error publishing this post.',
                error:err
            });
        }
        else{
            return res.status(200).json({
                msg: 'Successfully published blog post.',
                blogPost: blogPost
            });
        }
    });
};


