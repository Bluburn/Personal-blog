const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        profilePic: {
            type:String,
            default: ""
        },
        username: {
            type:String,
            required:true,
            unique:true
        },
        email: {
            type:String,
            required:true,
            uniique:true
        },
        password: {
            type:String,
            required:true
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);