const express = require('express');
const router = express.Router();
const likeController = require('../controller/likeControllers');

router.post('/posts/:postId/like', likeController.likePost);

module.exports = router;