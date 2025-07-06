const mongoose = require("mongoose"),
 moment = require('moment');

const team_match_schema = new mongoose.Schema({
    team1:{
        type: [String],
        required: true,
        lowercase: true
    },
    team2:{
        type: [String],
        required: true,
        lowercase: true
    },
    team1_score:{
        type: Number,
        required: true,
        min: 0,
        max: 30
    },
    team2_score:{
        type: Number,
        required: true,
        min: 0,
        max: 30
    },
    winner:{
        type: [String],
        required: true,
        lowercase: true
    },
    timestamp:{
        type: String,
        default: moment().toISOString()
    }
});

const TeamMatch = mongoose.model("TeamMatch", team_match_schema);

module.exports = TeamMatch;