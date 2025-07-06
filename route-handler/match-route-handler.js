const ResponseHelper = require("../helper/response-helper");
const {replySuccess, replyError} = require("../helper/response-helper");
const MatchService = require("../service/match-service");

class MatchRouteHandler{
    constructor(){
    }

    async getMatchById(req, res){
        try{
            let result = await new MatchService().getMatchById(req);
            return new ResponseHelper().replySuccess(res,result);
        }catch(err){
            return new ResponseHelper().replyError(res,err);
        } 
    }

    async createMatch(req, res){
        try{
            let result = await new MatchService().createMatch(req);
            return new ResponseHelper().replySuccess(res,result);
        }catch(err){
            return new ResponseHelper().replyError(res,err);
        } 
    }

    async updateMatch(req, res){
        try{
            let result = await new MatchService().updateMatch(req);
            return new ResponseHelper().replySuccess(res,result);
        }catch(err){
            return new ResponseHelper().replyError(res,err);
        } 
    }

    async deleteMatch(req, res){
        try{
            let result = await new MatchService().deleteMatch(req);
            return new ResponseHelper().replySuccess(res,result);
        }catch(err){
            return new ResponseHelper().replyError(res,err);
        } 
    }
}

module.exports = MatchRouteHandler;