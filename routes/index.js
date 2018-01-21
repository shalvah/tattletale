const router = require('express').Router();
const Post = require('./../models/post');

router.get('/', (req, res, next) => {
    Post.find({}, {title: true}).exec((err, posts) => {
        res.render('index', {posts});
    });
});

router.get('/posts/:id', (req, res, next) => {
    Post.findOne({_id: req.params.id}).exec((err, post) => {
        res.render('post', {post});
    });
});

router.post('/posts/:id', (req, res, next) => {
    Post.findByIdAndUpdate(req.params.id, { body: req.body.body }, (err, post) => {
            let Pusher = require('pusher');
            let pusher = new Pusher({
                appId: process.env.PUSHER_APP_ID,
                key: process.env.PUSHER_APP_KEY,
                secret: process.env.PUSHER_APP_SECRET,
                cluster: process.env.PUSHER_APP_CLUSTER
            });

            pusher.trigger('notifications', 'post_updated', post, req.headers['x-socket-id']);
            res.send('');
        });
});

module.exports = router;
