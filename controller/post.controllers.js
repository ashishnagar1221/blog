
const db = require('../models');
const jwt = require('jsonwebtoken');
const User = db.user;
const Post = db.post;

exports.createPost = async (req, res, next) => {
    const userId = req.userId;
    const { title, article, category } = req.body;
    let ret = await Post.create({
        createdBy: userId,
        title,
        article,
        category
    })
    console.log(ret)
    return res.json("Post created Successfully");
}

exports.deletePost = async (req, res, next) => {
    console.log(req.body)
    let ret = await Post.destroy({ where: { id: req.body.id } })
    console.log(ret)
    return res.json("Post deleted Successfully");
}
exports.editPost = async (req, res, next) => {
    console.log(req.body);
    const { title, article, category, postId } = req.body;
    let ret = await Post.update({ title, article, category }, { where: { id: postId } })
    return res.json(ret)
}

exports.fetchPost = async (req, res, next) => {
    console.log(req.body);
    const postId = req.body.postId;
    let ret = await Post.findOne({ where: { id: postId } })
    return res.json(ret)
}

exports.fetchAllPost = async (req, res, next) => {
    console.log(req.body)
    let ret = await Post.findAll()
    return res.json(ret)
}

exports.fetchPostByUserId = async (req, res, next) => {
    const userId = req.userId;
    console.log(userId)
    let ret = await Post.findAll({
        where: {
            createdBy: userId
        }
    })
    return res.json(ret);
}