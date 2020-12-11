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

    for (let field in form) {
        // if there is no text OR no url (if type is) OR no type (if url is)
        if (!params.text || !params.media.url && params.media.type || params.media.url && !params.media.type) {
            response.json(fieldMissing, 400);
            return;
        }
    }

    PostModel.create(params, () => {
        response.status(201).json()
        return;
    });
});


router.put('/:postId/likes', authorize, (request, response) => {

    // Endpoint for current user to like a post

    if(request.params.postId){
        PostModel.like(request.currentUser.id, request.params.postId, () => {
            response.status(200).json()
        })}
        else{
            response.status(404).json(noPost)
        }
});

router.delete('/:postId/likes', authorize, (request, response) => {

    // Endpoint for current user to unlike a post

    if(request.params.postId){
        PostModel.unlike(request.currentUser.id, request.params.postId, ()=>{
            response.status(200).json()
        })
    }
    else{
        //post not found
        response.status(404).json(noPost)
    }
});

module.exports = router;
