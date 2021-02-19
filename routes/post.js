
const express = require('express');
const router = express.Router();
const awthJwt = require('../middleware/verifyAuth')

const controller = require('../controller/post.controllers');

router.post('/create-post', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.createPost);

router.post('/delete-post', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.deletePost);

router.post('/edit-post', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.editPost);

router.get('/fetch-post', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.fetchPost);

router.get('/fetch-all-post', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.fetchAllPost);

router.get('/fetch-post-user', [
    awthJwt.verifyAuth,
    awthJwt.verifyUser
], controller.fetchPostByUserId);

module.exports = router;