/**
 * The TempController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TempService');
const createtemp = async (request, response) => {
  await Controller.handleRequest(request, response, service.createtemp);
};

const deletetemp = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletetemp);
};

const getAlltemp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAlltemp);
};

const gettemp = async (request, response) => {
  await Controller.handleRequest(request, response, service.gettemp);
};

const updatetemp = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatetemp);
};


module.exports = {
  createtemp,
  deletetemp,
  getAlltemp,
  gettemp,
  updatetemp,
};
