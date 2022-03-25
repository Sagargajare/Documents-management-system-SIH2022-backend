const express = require('express');
const documentController = require('../../controllers/document.controller');
const documentValidation = require('../../validations/document.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', documentController.allDocuments);
router.get('/:id', documentController.getDocument);
router.post('/', validate(documentValidation.create), documentController.createDocument);
router.patch('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
