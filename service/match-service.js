let MatchManager = require("../manager/match-manager");
MatchManager = new MatchManager();

class MatchService{
    constructor(){

    }

    async getMatchById(req){
        try{
            const result = await MatchManager.getMatchById(req);
            return result;
        }catch(err){
            throw err;
        }
    }

    async createMatch(req){
        try{
            const result = await MatchManager.createMatch(req);
            return result;
        }catch(err){
            throw err;
        }
    }

    async updateMatch(req){
        try{
            const result = await MatchManager.updateMatch(req);
            return result;
        }catch(err){
            throw err;
        }
    }

    async deleteMatch(req){
        try{
            const result = await MatchManager.deleteMatch(req);
            return result;
        }catch(err){
            throw err;
        }
    }
   
}

module.exports = MatchService;