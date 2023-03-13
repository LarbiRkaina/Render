"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapReviewListFromModelToApi = exports.mapReviewFromModelToApi = exports.mapHouseListFromModelToApi6 = exports.mapHouseListFromModelToApi = exports.mapHouseFromModelToApi7 = exports.mapHouseFromModelToApi = exports.mapHouseFromApiToModel = void 0;
const mapHouseFromModelToApi = house => ({
  id: house._id,
  name: house.name,
  //releaseDate: house.releaseDate?.toISOString(),
  description: house.description,
  reviews: mapReviewListFromModelToApi(house.reviews)
});
exports.mapHouseFromModelToApi = mapHouseFromModelToApi;
const mapReviewListFromModelToApi = reviewList => reviewList.map(mapReviewFromModelToApi);
exports.mapReviewListFromModelToApi = mapReviewListFromModelToApi;
const mapReviewFromModelToApi = house => ({
  userName: house.reviewer_name,
  //releaseDate: house.releaseDate?.toISOString(),
  comment: house.comments
});
exports.mapReviewFromModelToApi = mapReviewFromModelToApi;
const mapHouseListFromModelToApi = houseList => houseList.map(mapHouseFromModelToApi);
exports.mapHouseListFromModelToApi = mapHouseListFromModelToApi;
const mapHouseFromApiToModel = house => ({
  _id: house.id,
  name: house.name,
  description: house.description,
  reviews: mapHouseListFromModelToApi6(house.reviews)
});
exports.mapHouseFromApiToModel = mapHouseFromApiToModel;
const mapHouseListFromModelToApi6 = houseList => houseList.map(mapHouseFromModelToApi7);
exports.mapHouseListFromModelToApi6 = mapHouseListFromModelToApi6;
const mapHouseFromModelToApi7 = house => ({
  reviewer_name: house.userName,
  //releaseDate: house.releaseDate?.toISOString(),
  comments: house.comment
});
exports.mapHouseFromModelToApi7 = mapHouseFromModelToApi7;