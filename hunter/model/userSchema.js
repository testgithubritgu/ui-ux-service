import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'] 
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
