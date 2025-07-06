let Constants = require('../common/constants');
let Match = require("./match");
Match = new Match();
let noSqlFileHash = {};

noSqlFileHash[Constants.Tables.Match] = {
    getById: Match.getById,
    create: Match.create,
    updateById: Match.updateById,
    deleteById: Match.deleteById
}

module.exports = noSqlFileHash;