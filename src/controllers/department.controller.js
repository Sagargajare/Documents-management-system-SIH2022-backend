const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { departmentService } = require('../services');

const allDepartments = catchAsync(async (req, res) => {
  const departments = await departmentService.getAllDepartment();
  res.status(httpStatus.OK).send({ data: departments });
});
const getDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.getDepartmentById(req.params.id);
  res.status(httpStatus.OK).send({ data: department });
});
const createDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.createDepartment(req.body, '618661a06a10361bb091894');
  res.status(httpStatus.OK).send({ data: department });
});
const deleteDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.deleteDepartment(req.params.id);
  res.status(httpStatus.OK).send({ data: department });
});
const updateDepartment = catchAsync(async (req, res) => {
  const department = await departmentService.updateDepartment(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: department });
});

module.exports = {
  allDepartments,
  getDepartment,
  createDepartment,
  deleteDepartment,
  updateDepartment,
};
