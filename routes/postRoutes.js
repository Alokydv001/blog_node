const express = require('express');
const router = express.Router();
// const postController = require('../controllers/postController');

const { createPost, getAllPosts, getPostById, updatePost, deletePost } = require('../controller/postControllers')

// Route to create a new post
router.post('/posts', createPost);

// Route to get all posts
router.get('/posts', getAllPosts);

// Route to get a single post by ID
router.get('/posts/:id', getPostById);

// Route to update a post by ID
router.put('/posts/:id', updatePost);

// Route to delete a post by ID
router.delete('/posts/:id', deletePost);

module.exports = router;
