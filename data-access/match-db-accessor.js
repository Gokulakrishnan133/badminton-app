let Constants = require('../common/constants');
let noSqlFileHash = require("../nosql/index");
const Error = require("../errors/errors");
let noSql = noSqlFileHash[Constants.Tables.Match];
class MatchDbAccessor{
    constructor(){

    }
    async getMatch(req){
        try{
            let {player1, player2, player1_score, player2_score, winner} = req;
            let get = noSql.get;
            const match = await get(player1, player2, player1_score, player2_score, winner);
            if(!match){
                throw Error.MatchNotFound;
            }
            return match[0];
        }catch(err){
            throw err;
        }  
    }

    async getMatchById(id){
        try{
            let getById = noSql.getById;
            const match = await getById(id);
            if(!match){
                throw Error.MatchNotFound;
            }
            return match;
        }catch(err){
            throw err;
        }  
    }

    async createMatch(req){
        try{
            let {player1, player2, player1_score, player2_score, winner} = req;
            let create = noSql.create;
            const match = await create(player1, player2, player1_score, player2_score, winner);
            return match;
        }catch(err){
            throw err;
        }  
    }

    async updateMatch(req){
        try{
            let current_match;
            const {id} = req.params;
            if(!id){
                current_match = this.get(req.body);
            }
            id = id || current_match._id;
            let {player1, player2, player1_score, player2_score, winner} = req.body;
            let updateById = noSql.updateById;
            const match = await updateById(id, player1, player2, player1_score, player2_score, winner);
            return match;
        }catch(err){
            throw err;
        }  
    }

    async deleteMatch(id){
        try{
            let deleteById = noSql.deleteById;
            const match = await deleteById(id);
            return match;
        }catch(err){
            throw err;
        }  
    }
}

module.exports = MatchDbAccessor;