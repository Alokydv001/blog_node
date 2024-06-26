// const mongoose = require('mongoose');

// const connectDB = () => {
//     mongoose.connect(process.config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then((data) => {
//         console.log(`Mongodb connected with server: ${data.connection.host}`);
//     })
// }

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = () => {
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log(`MongoDB connected successfully`);
        })
        .catch(err => {
            console.error(`Error connecting to MongoDB: ${err}`);
        });
};

module.exports = connectDB;
