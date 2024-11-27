const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI; // Get the URI from environment variables
        console.log('MongoDB URI:', uri); // Log the URI
        if (!uri) {
            throw new Error('MongoDB URI is undefined. Please check your .env file.');
        }

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit the process if the connection fails
 }
};

module.exports = connectDB;