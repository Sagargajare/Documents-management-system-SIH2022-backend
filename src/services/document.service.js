const { Document } = require('../models');

const getAllDocument = async () => {
  const documents = await Document.find();
  return documents;
};
const getDocumentById = async (id) => {
  const document = await Document.findById(id);
  return document;
};
const createDocument = async (body) => {
  const document = new Document(body);
  await document.save();
  return document;
};
const updateDocument = async (id, body) => {
  const document = await Document.findByIdAndUpdate(id, body, { new: true });
  return document;
};
const deleteDocument = async (id) => {
  const document = await Document.findByIdAndDelete(id);
  return document;
};

module.exports = {
  getAllDocument,
  getDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
