import { Schema, model, models } from 'mongoose';

// create schema
const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email is already taken!'],
        required: [true, 'Email is required!'],
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^[a-zA-Z0-9]+$/, 'Username is invalid, it should contain 8-20 alphanumeric letters and be unique.'],
    },
    image: {
        type: String,
    }
});

// readme.md # user.js
const User = models.User || model("User", userSchema);

export default User;