
const express = require('express');
const bodyParser = require('body-parser');
const likeRoutes = require('./routes/likeRoutes');
const postRouter = require('./routes/postRoutes')
const app = express();
const connectDB = require('./utils/db');
require('dotenv').config();

connectDB();
app.use(bodyParser.json());

// Like Routes
app.use('/api/likes', likeRoutes);

// post Routes
app.use('api/post', postRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start server

const PORT = 3000;
// console.log(process.env.DB_URI);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));