const { Department } = require('../models');

const getAllDepartment = async () => {
  const departments = await Department.find();
  return departments;
};
const getDepartmentById = async (id) => {
  const department = await Department.findById(id);
  return department;
};
const createDepartment = async (body) => {
  const department = new Department(body);
  await department.save();
  return department;
};
const updateDepartment = async (id, body) => {
  const department = await Department.findByIdAndUpdate(id, body, { new: true });
  return department;
};
const deleteDepartment = async (id) => {
  const department = await Department.findByIdAndDelete(id);
  return department;
};

module.exports = {
  getAllDepartment,
  getDepartmentById,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
