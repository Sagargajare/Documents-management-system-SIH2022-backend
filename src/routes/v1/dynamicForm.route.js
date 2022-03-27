const express = require('express');
const multer = require('multer');
const path = require('path');
const validate = require('../../middlewares/validate');
const dynamicFormValidation = require('../../validations/dynamicForm.validation');
const dynamicFormController = require('../../controllers/dynamicForm.controller');

const router = express.Router();

const mediaStorage = multer.diskStorage({
  destination: 'media/documents',
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const mediaUpload = multer({
  storage: mediaStorage,

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|pdf|jpeg)$/)) {
      return cb(new Error('upload only png, pdf, jpeg and jpg format'));
    }
    cb(undefined, true);
  },
});
router
  .route('/')
  .post(validate(dynamicFormValidation.createDynamicForm), dynamicFormController.createDynamicForm)
  .get(dynamicFormController.getDynamicForms);

router.post(
  '/uploadImage',
  mediaUpload.single('image'),
  (req, res) => {
    res.send(req.file);
  },
  (error, req, res) => {
    res.status(400).send({ error: error.message });
  }
);
router.get(
  '/uploadImage',
  (req, res) => {
    res.send({ message: 'get working' });
  },
  (error, req, res) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = router;
