const mongoose = require('mongoose');
const { array } = require('prop-types');

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

module.exports = mongoose.model("User", CategorySchema);