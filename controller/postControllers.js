const Post = require('../models/post');

// Controller to create a new post
exports.createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const post = new Post({ title, content, author });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to get a single post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a post by ID
exports.updatePost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post updated successfully', post });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a post by ID
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
