const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { applicationRemarkService } = require('../services');

const allApplicationRemarks = catchAsync(async (req, res) => {
  const applicationRemarks = await applicationRemarkService.getAllApplicationRemark();
  res.status(httpStatus.OK).send({ data: applicationRemarks });
});
const getApplicationRemark = catchAsync(async (req, res) => {
  const applicationRemark = await applicationRemarkService.getApplicationRemarkById(req.params.id);
  res.status(httpStatus.OK).send({ data: applicationRemark });
});
const createApplicationRemark = catchAsync(async (req, res) => {
  const applicationRemark = await applicationRemarkService.createApplicationRemark(req.body, '618661a06a10361bb0918947');
  res.status(httpStatus.OK).send({ data: applicationRemark });
});
const deleteApplicationRemark = catchAsync(async (req, res) => {
  const applicationRemark = await applicationRemarkService.deleteApplicationRemark(req.params.id);
  res.status(httpStatus.OK).send({ data: applicationRemark });
});
const updateApplicationRemark = catchAsync(async (req, res) => {
  const applicationRemark = await applicationRemarkService.updateApplicationRemark(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: applicationRemark });
});

module.exports = {
  allApplicationRemarks,
  getApplicationRemark,
  createApplicationRemark,
  deleteApplicationRemark,
  updateApplicationRemark,
};
