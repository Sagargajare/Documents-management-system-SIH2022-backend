const express = require('express');
const documentController = require('../../controllers/document.controller');

const router = express.Router();

router.get('/', documentController.allDocuments);
router.get('/:id', documentController.getDocument);
router.post('/', documentController.createDocument);
router.patch('/:id', documentController.updateDocument);
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
