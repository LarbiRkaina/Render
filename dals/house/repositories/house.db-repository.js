"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dbRepository = void 0;
var _servers = require("../../../core/servers");
const dbRepository = {
  getHouseList: async (page, pageSize) => {
    return await _servers.db.collection("listingsAndReviews").find().toArray();
  },
  getHouse: async id => {
    return await _servers.db.collection("listingsAndReviews").findOne({
      "_id": id
    });
  },
  saveHouse: async house => {
    const {
      insertedId
    } = await _servers.db.collection("listingsAndReviews").insertOne(house);
    return {
      ...house,
      _id: insertedId
    };
  },
  deleteHouse: async id => {
    throw new Error("Not implemented");
  }
};
exports.dbRepository = dbRepository;