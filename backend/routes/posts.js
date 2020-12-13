const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const PostModel = require('../models/PostModel');


router.get('/', authorize, (request, response) => {

    // Endpoint to get posts of people that currently logged in user follows or their own posts

    PostModel.getAllForUser(request.currentUser.id, (postIds) => {

        if (postIds.length) {
            PostModel.getByIds(postIds, request.currentUser.id, (posts) => {
                response.status(201).json(posts)
            });
            return;
        }
        response.json([])

    })

});

router.post('/', authorize, (request, response) => {

    // endpoint to create a new post

    let params = {
        userId: request.currentUser.id,
        text: request.body.text,
        media: {
            type: request.body.media.type,
            url: request.body.media.url,
        },
    };

    const fieldMissing = {
        code: null,
        message: 'Please provide all required information.'
    };

    // if there is no text OR no url (if type is) OR no type (if url is)
    if (!params.text || !params.media.url && params.media.type || params.media.url && !params.media.type) {
        response.status(400).json(fieldMissing);
        return;
    }


    PostModel.create(params, () => {
        response.status(200).json()
        //return;
    });
});


router.put('/:postId/likes', authorize, (request, response) => {
    const noPost = {
        code: 'Post not found',
        message: 'Post with those indicators can not be found'
    }
    // Endpoint for current user to like a post

    let thisPostId = request.body.postId

    PostModel.query('SELECT * FROM post WHERE post.id = ?', [thisPostId], (err, rows) => {
        if (request.params.postId) {
            PostModel.like(request.currentUser.id, request.params.postId, () => {
                response.status(200).json()
            })
        } else {
            response.status(404).json(noPost)
        }
    });
});

router.delete('/:postId/likes', authorize, (request, response) => {

    const noPost = {
        code: 'Post not found',
        message: 'Post with those indicators can not be found'
    }
    // Endpoint for current user to unlike a post

    let thisPostId = request.body.postId

    PostModel.query('SELECT * FROM post WHERE post.id = ?', [thisPostId], (err, rows) => {
        if (request.params.postId) {
            PostModel.unlike(request.currentUser.id, request.params.postId, () => {
                response.status(200).json()
            })

        } else {
            //post not found
            response.status(404).json(noPost)
        }
    })

});

module.exports = router;
