const mongoose = require('mongoose');
const LikeSchema = new mongoose.Schema({
    userID: {
        type: Schema.Types.ObjectID,
        ref: 'User'
    },
    gameId:{
        type: Schema.Types.ObjectID,
        ref:'Game'
    }
},{timestamps: true});
module.exports = mongoose.model('Like', LikeSchema);