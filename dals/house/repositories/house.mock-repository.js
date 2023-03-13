"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockRepository = void 0;
var _mockData = require("../../mock-data");
const insertHouse = house => {
  const newHouse = {
    ...house
  };
  _mockData.db.houses = [..._mockData.db.houses, newHouse];
  return newHouse;
  ;
};
const updateHouse = house => {
  _mockData.db.houses = _mockData.db.houses.map(b => b._id === house._id ? {
    ...b,
    ...house
  } : b);
  return house;
};
const paginateHouseList = (houseList, page, pageSize) => {
  let paginatedHouseList = [...houseList];
  if (page && pageSize) {
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, paginatedHouseList.length);
    paginatedHouseList = paginatedHouseList.slice(startIndex, endIndex);
  }
  return paginatedHouseList;
};
const mockRepository = {
  getHouseList: async (page, pageSize) => paginateHouseList(_mockData.db.houses, page, pageSize),
  getHouse: async id => _mockData.db.houses.find(b => b._id === id),
  saveHouse: async book => Boolean(book._id) ? updateHouse(book) : insertHouse(book),
  deleteHouse: async id => {
    _mockData.db.houses = _mockData.db.houses.filter(b => b._id !== id);
    return true;
  }
};
exports.mockRepository = mockRepository;