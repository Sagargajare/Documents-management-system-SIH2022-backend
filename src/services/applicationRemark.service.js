const { ApplicationRemark } = require('../models');

const getAllApplicationRemark = async () => {
  const applicationRemarks = await ApplicationRemark.find();
  return applicationRemarks;
};
const getApplicationRemarkById = async (id) => {
  const applicationRemark = await ApplicationRemark.findById(id);
  return applicationRemark;
};
const createApplicationRemark = async (body, userId) => {
  const applicationRemark = new ApplicationRemark({ ...body, remarkBy: userId });
  await applicationRemark.save();
  return applicationRemark;
};
const updateApplicationRemark = async (id, body) => {
  const applicationRemark = await ApplicationRemark.findByIdAndUpdate(id, body, { new: true });
  return applicationRemark;
};
const deleteApplicationRemark = async (id) => {
  const applicationRemark = await ApplicationRemark.findByIdAndDelete(id);
  return applicationRemark;
};

module.exports = {
  getAllApplicationRemark,
  getApplicationRemarkById,
  createApplicationRemark,
  updateApplicationRemark,
  deleteApplicationRemark,
};
