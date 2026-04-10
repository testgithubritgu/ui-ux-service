import mongoose from 'mongoose';

const connectDb = (handler) => async (req, res) => {
    if (mongoose.connection.readyState === 1) {
        return handler(req, res);
    }

    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined");
        }

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB connected");
        return handler(req, res);
    } catch (error) {
        console.error("DB connection error:", error);
        res.status(500).json({
            error: "Database connection failed",
            message: error.message
        });
    }
};

export default connectDb;
