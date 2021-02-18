
const express = require('express');
const router = express.Router();

const controller = require('../controller/post.controllers');
const { route } = require('./auth');

route.post('/create-post',controller.createPost);
route.post('/delete-post',controller.deletePost);
route.post('/edit-post',controller.editPost);
route.get('fetch-post',controller.fetchPost);
route.get('/fetch-all-post',controller.fetchAllPost);
route.get('/fetch-post-user',controller.fetchPostByUserId);