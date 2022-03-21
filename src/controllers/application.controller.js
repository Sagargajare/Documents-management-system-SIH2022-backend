const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { applicationService } = require('../services');

const allApplications = catchAsync(async (req, res) => {
  const applications = await applicationService.getAllApplication();
  res.status(httpStatus.OK).send({ data: applications });
});
const getApplication = catchAsync(async (req, res) => {
  const application = await applicationService.getApplicationById(req.params.id);
  res.status(httpStatus.OK).send({ data: application });
});
const createApplication = catchAsync(async (req, res) => {
  const application = await applicationService.createApplication(req.body, '618661a06a10361bb0918947');
  res.status(httpStatus.OK).send({ data: application });
});
const deleteApplication = catchAsync(async (req, res) => {
  const application = await applicationService.deleteApplication(req.params.id);
  res.status(httpStatus.OK).send({ data: application });
});
const updateApplication = catchAsync(async (req, res) => {
  const application = await applicationService.updateApplication(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: application });
});

module.exports = {
  allApplications,
  getApplication,
  createApplication,
  deleteApplication,
  updateApplication,
};
