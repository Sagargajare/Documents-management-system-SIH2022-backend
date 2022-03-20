const express = require('express');
const requestController = require('../../controllers/request.controller');

const router = express.Router();

router.get('/', requestController.allRequests);
router.get('/:id', requestController.getRequest);
router.post('/', requestController.createRequest);
router.patch('/:id', requestController.updateRequest);
router.delete('/:id', requestController.deleteRequest);

module.exports = router;
