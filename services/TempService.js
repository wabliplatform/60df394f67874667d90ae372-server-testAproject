/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Temp } = require('../models/Temp');

/**
* Creates the data
*
* temp Temp data to be created
* returns temp
* */
const createtemp = ({ temp }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Temp(temp).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* tempId String the Id parameter
* no response value expected for this operation
* */
const deletetemp = ({ tempId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Temp.findOneAndDelete({ _id:tempId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAlltemp = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Temp.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* tempId String the Id parameter
* returns temp
* */
const gettemp = ({ tempId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Temp.findById(tempId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* tempId String the Id parameter
* temp Temp data to be updated (optional)
* returns temp
* */
const updatetemp = ({ tempId, temp }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Temp.findOneAndUpdate({ _id:tempId },temp).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createtemp,
  deletetemp,
  getAlltemp,
  gettemp,
  updatetemp,
};
