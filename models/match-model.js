const mongoose = require("mongoose"),
 moment = require('moment');

const match_schema = new mongoose.Schema({
    player1:{
        type: String,
        required: true,
        lowercase: true
    },
    player2:{
        type: String,
        required: true,
        lowercase: true
    },
    player1_score:{
        type: Number,
        required: true,
        min: 0,
        max: 30
    },
    player2_score:{
        type: Number,
        required: true,
        min: 0,
        max: 30
    },
    winner:{
        type: String,
        required: true,
        lowercase: true
    },
    timestamp:{
        type: String,
        default: moment().toISOString()
    }
});

const Match = mongoose.model("Match", match_schema);

module.exports = Match;