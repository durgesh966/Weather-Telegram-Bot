const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    chatId: { type: Number, unique: true }, 
    name: String,
    city: String,
    country: String
});

module.exports = mongoose.model('User', userSchema);

