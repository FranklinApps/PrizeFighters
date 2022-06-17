const mongoose = require('mongoose');
const GameSchema = new mongoose.Schema({
    gameTitle:{
        type: String,
        required:[true,
        "Game title is required"]
    },

    releaseDate:{
        type: Number,
        required: [true,
        "Release date is required"]
    },
    
    console:{
        type: String,
        required: [true,
        "platform is required"]
    }
},{timestamps: true});

module.exports = mongoose.model('Game', GameSchema);