"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.housesApi = void 0;
var _express = require("express");
var _dals = require("../../dals");
var _house = require("./house.mappers");
const housesApi = (0, _express.Router)();
exports.housesApi = housesApi;
housesApi.get('/', async (req, res, next) => {
  try {
    const page = Number(req.query.page);
    const pageSize = Number(req.query.pageSize);
    const bookList = await _dals.houseRepository.getHouseList(page, pageSize);
    res.send((0, _house.mapHouseListFromModelToApi)(bookList));
  } catch (error) {
    next(error);
  }
}).get('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const house = await _dals.houseRepository.getHouse(id);
    res.send((0, _house.mapHouseFromModelToApi)(house));
  } catch (error) {
    next(error);
  }
}).post('/', async (req, res, next) => {
  try {
    const house = (0, _house.mapHouseFromApiToModel)(req.body);
    const newHouse = await _dals.houseRepository.saveHouse(house);
    res.status(201).send((0, _house.mapHouseFromModelToApi)(newHouse));
  } catch (error) {
    next(error);
  }
}).put('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    const house = (0, _house.mapHouseFromApiToModel)({
      ...req.body,
      id
    });
    await _dals.houseRepository.saveHouse(house);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}).delete('/:id', async (req, res, next) => {
  try {
    const {
      id
    } = req.params;
    await _dals.houseRepository.deleteHouse(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});