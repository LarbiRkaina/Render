"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;
const db = {
  houses: [{
    _id: "1",
    name: "Casa malagueta",
    description: "Buena y soleada",
    reviews: [{
      comments: "Agradable",
      reviewer_name: "Larbi"
    }]
  }, {
    _id: "2",
    name: "Casa Eugenio Gross",
    description: "Grande y luminosa",
    reviews: [{
      reviewer_name: "Amira",
      comments: "Bonita"
    }]
  }]
};
exports.db = db;