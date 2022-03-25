const { Application } = require('../models');

const getAllApplication = async () => {
  const applications = await Application.find();
  return applications;
};
const getApplicationById = async (id) => {
  const application = await Application.findById(id);
  return application;
};
const createApplication = async (body, userId) => {
  const application = new Application({ ...body, initiatedBy: userId });
  await application.save();
  return application;
};
const updateApplication = async (id, body) => {
  const application = await Application.findByIdAndUpdate(id, body, { new: true });
  return application;
};
const deleteApplication = async (id) => {
  const application = await Application.findByIdAndDelete(id);
  return application;
};

module.exports = {
  getAllApplication,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};
