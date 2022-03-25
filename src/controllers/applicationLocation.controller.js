const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { applicationLocationService } = require('../services');

const allApplicationLocations = catchAsync(async (req, res) => {
  const applicationLocations = await applicationLocationService.getAllApplicationLocation();
  res.status(httpStatus.OK).send({ data: applicationLocations });
});
const getApplicationLocation = catchAsync(async (req, res) => {
  const applicationLocation = await applicationLocationService.getApplicationLocationById(req.params.id);
  res.status(httpStatus.OK).send({ data: applicationLocation });
});
const createApplicationLocation = catchAsync(async (req, res) => {
  const applicationLocation = await applicationLocationService.createApplicationLocation(
    req.body,
    '62396b20a1225d10502deb69'
  );
  res.status(httpStatus.OK).send({ data: applicationLocation });
});
const deleteApplicationLocation = catchAsync(async (req, res) => {
  const applicationLocation = await applicationLocationService.deleteApplicationLocation(req.params.id);
  res.status(httpStatus.OK).send({ data: applicationLocation });
});
const updateApplicationLocation = catchAsync(async (req, res) => {
  const applicationLocation = await applicationLocationService.updateApplicationLocation(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: applicationLocation });
});

module.exports = {
  allApplicationLocations,
  getApplicationLocation,
  createApplicationLocation,
  updateApplicationLocation,
  deleteApplicationLocation,
};
