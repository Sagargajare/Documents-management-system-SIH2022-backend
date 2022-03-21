const { ApplicationLocation } = require('../models');

const getAllApplicationLocation = async () => {
  const applicationLocations = await ApplicationLocation.find();
  return applicationLocations;
};
const getApplicationLocationById = async (id) => {
  const applicationLocation = await ApplicationLocation.findById(id);
  return applicationLocation;
};
const createApplicationLocation = async (body) => {
  const applicationLocation = new ApplicationLocation(body);
  await applicationLocation.save();
  return applicationLocation;
};
const updateApplicationLocation = async (id, body) => {
  const applicationLocation = await ApplicationLocation.findByIdAndUpdate(id, body, { new: true });
  return applicationLocation;
};
const deleteApplicationLocation = async (id) => {
  const applicationLocation = await ApplicationLocation.findByIdAndDelete(id);
  return applicationLocation;
};

module.exports = {
  getAllApplicationLocation,
  getApplicationLocationById,
  createApplicationLocation,
  updateApplicationLocation,
  deleteApplicationLocation,
};
