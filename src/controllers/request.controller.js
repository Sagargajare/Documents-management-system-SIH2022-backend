const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { requestService } = require('../services');

const allRequests = catchAsync(async (req, res) => {
  const requests = await requestService.getAllRequest();
  res.status(httpStatus.OK).send({ data: requests });
});
const getRequest = catchAsync(async (req, res) => {
  const request = await requestService.getRequestById(req.params.id);
  res.status(httpStatus.OK).send({ data: request });
});
const createRequest = catchAsync(async (req, res) => {
  const request = await requestService.createRequest(req.body);
  res.status(httpStatus.OK).send({ data: request });
});
const deleteRequest = catchAsync(async (req, res) => {
  const request = await requestService.deleteRequest(req.params.id);
  res.status(httpStatus.OK).send({ data: request });
});
const updateRequest = catchAsync(async (req, res) => {
  const request = await requestService.updateRequest(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: request });
});

module.exports = {
  allRequests,
  getRequest,
  createRequest,
  deleteRequest,
  updateRequest,
};
