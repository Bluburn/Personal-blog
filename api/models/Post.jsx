const mongoose = require('mongoose');
const { array } = require('prop-types');

const PostSchema = new mongoose.Schema(
    {
        title: {
            typeof: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required:false,
        },
        username: {
            type: String,
            required:true
        },
        categorirs: {
            type: array,
            required:false
        }
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", PostSchema);