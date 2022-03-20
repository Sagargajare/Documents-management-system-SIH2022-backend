const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { documentService } = require('../services');

const allDocuments = catchAsync(async (req, res) => {
  const documents = await documentService.getAllDocument();
  res.status(httpStatus.OK).send({ data: documents });
});
const getDocument = catchAsync(async (req, res) => {
  const document = await documentService.getDocumentById(req.params.id);
  res.status(httpStatus.OK).send({ data: document });
});
const createDocument = catchAsync(async (req, res) => {
  const document = await documentService.createDocument(req.body);
  res.status(httpStatus.OK).send({ data: document });
});
const deleteDocument = catchAsync(async (req, res) => {
  const document = await documentService.deleteDocument(req.params.id);
  res.status(httpStatus.OK).send({ data: document });
});
const updateDocument = catchAsync(async (req, res) => {
  const document = await documentService.updateDocument(req.params.id, req.body);
  res.status(httpStatus.OK).send({ data: document });
});

module.exports = {
  allDocuments,
  getDocument,
  createDocument,
  deleteDocument,
  updateDocument,
};
