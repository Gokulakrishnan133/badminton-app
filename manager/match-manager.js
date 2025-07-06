let Match = require("../models/match-model"),
  MatchDbAccessor = require("../data-access/match-db-accessor");
  MatchDbAccessor = new MatchDbAccessor();
class MatchManager{
    constructor(){

    }
    /*async createMatch(req,res,next){
        try{
            let current_match = await MatchDbAccessor.get(req);
            // let current_match = await Match.find({player1: req.body.player1, player2: req.body.player2, winner: "Match In Progress"});
            if(current_match.length != 0){
                let matches = await MatchDbAccessor.updateById(current_match[0]);
                // let matches = await Match.findByIdAndUpdate(current_match[0].id, {player1Score: req.body.player1Score, player2Score: req.body.player2Score, winner: req.body.winner});
            }
            
            const match = await Match.create(req.body);
            console.log(match);
            
            return res.status(201).json({
                status: "success",
                message: `Match created successfully ${match.id}`
            })
        }catch(err){
            return res.status(500).json({
                status: "fail",
                message: `${err}`
            })
        }
    }*/

    async getMatchById(req){
        try{
            const {id} = req.params;
            const result = await MatchDbAccessor.getMatchById(id);
            return result;
        }catch(err){
            throw err;
        }
    }

    async createMatch(req){
        try{
            let result;
            if(req.body.winner === 'Match In Progress'){
                result = await this.updateMatch(req);
            }else{
                result = await MatchDbAccessor.createMatch(req.body);
            }
            return result;
        }catch(err){
            throw err;
        }
    }

    async updateMatch(req){
        try{
            const result = await MatchDbAccessor.updateMatch(req);
            return result;
        }catch(err){
            throw err;
        }
    }

    async deleteMatch(req){
        try{
            const result = await MatchDbAccessor.deleteMatch(req.params.id);
            return result;
        }catch(err){
            throw err;
        }
    }
}

module.exports = MatchManager;
