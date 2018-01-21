const router = require('express').Router();
const Post = require('./../models/post');

router.get('/', (req, res, next) => {
    Post.find({}, {title: true}).exec((err, posts) => {
        res.render('index', { posts });
    });
});

router.get('/posts/:id', (req, res, next) => {
    Post.findOne({ _id: req.params.id }).exec((err, post) => {
        res.render('post', { post });
    });
});

module.exports = router;
