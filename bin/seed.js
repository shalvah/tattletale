require('mongoose').connect('mongodb://localhost/tattletale');

const faker = require('faker');
const Post = require('../models/post');

// empty the collection first
Post.remove({})
    .then(() => {
        const posts = [];
        for (let i = 0; i < 5; i++) {
            posts.push({
                title: faker.lorem.sentence(),
                body: faker.lorem.paragraph()
            });
        }
        return Post.create(posts);
    })
    .then(() => {
        process.exit();
    })
    .catch((e) => {
        console.log(e);
        process.exit(1);
    });
