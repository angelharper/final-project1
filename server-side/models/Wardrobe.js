const mongoose = require('mongoose');
const User = require('./User');

const wardrobeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
  images: [{ type: String, default: null }],
});


module.exports = mongoose.model("Wardrobe", wardrobeSchema)