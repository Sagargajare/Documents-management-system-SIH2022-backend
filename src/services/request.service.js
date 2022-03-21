const { Request } = require('../models');

const getAllRequest = async () => {
  const requests = await Request.find();
  return requests;
};
const getRequestById = async (id) => {
  const request = await Request.findById(id);
  return request;
};
const createRequest = async (body) => {
  const request = new Request(body);
  await request.save();
  return request;
};
const updateRequest = async (id, body) => {
  const request = await Request.findByIdAndUpdate(id, body, { new: true });
  return request;
};
const deleteRequest = async (id) => {
  const request = await Request.findByIdAndDelete(id);
  return request;
};

module.exports = {
  getAllRequest,
  getRequestById,
  createRequest,
  updateRequest,
  deleteRequest,
};
