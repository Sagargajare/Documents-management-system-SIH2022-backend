const express = require('express');
const validate = require('../../middlewares/validate');
const requestController = require('../../controllers/request.controller');
const requestValidation = require('../../validations/request.validation');

const router = express.Router();

router.get('/', requestController.allRequests);
router.get('/:id', requestController.getRequest);
router.post('/', validate(requestValidation.create), requestController.createRequest);
router.patch('/:id', requestController.updateRequest);
router.delete('/:id', requestController.deleteRequest);

module.exports = router;
