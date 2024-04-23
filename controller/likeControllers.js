const Like = require('../models/like');

// const Post = require('../models/Post');

exports.likePost = async (req, res) => {
    try {
        const postId = req.params.postId;


        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        const existingLike = await Like.findOne({ post: postId, user: req.user._id });
        if (existingLike) {
            return res.status(400).json({ message: 'You have already liked this post' });
        }

        const newLike = new Like({ post: postId, user: req.user._id });
        await newLike.save();

        res.json({ message: 'Post liked successfully' });
    } catch (error) {
        console.error('Error liking post:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};