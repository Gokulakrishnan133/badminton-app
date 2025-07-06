const Match = require("../models/match-model");

class NoSql{
    constructor(){

    }

    create = async (_1, _2, _3, _4, _5) => {
        try{
            let match = await Match.create({player1: `${_1}`, player2: `${_2}`, player1_score: `${_3}`, player2_score: `${_4}`, winner: `${_5}`});
            return match;
        }catch(err){
            throw err;
        }   
    }

    getById = async (_1) => {
        try{
            let match = await Match.findById(`${_1}`);
            return match;
        }catch(err){
            throw err;
        }
    }

    updateById = async (_1, _2, _3, _4, _5, _6) => {
        try{
            let match = await Match.findByIdAndUpdate(`${1}`,{player1: `${_2}`, player2: `${_3}`, player1_score: `${_4}`, player2_score: `${_5}`, winner: `${_6}`});
            return match;
        }catch(err){
            throw err;
        }
    }

    deleteById = async (_1) => {
        try{
            await Match.findByIdAndDelete(`${_1}`);
            return 'Deleted Successfully'
        }catch(err){
            throw err;
        } 
    }
}

module.exports = NoSql;

