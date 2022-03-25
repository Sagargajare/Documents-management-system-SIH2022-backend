const express = require('express');
const applicationRemarkController = require('../../controllers/applicationRemark.controller');
const applicationRemarkValidation = require('../../validations/applicationRemark.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', applicationRemarkController.allApplicationRemarks);
router.get('/:id', applicationRemarkController.getApplicationRemark);
router.post('/', validate(applicationRemarkValidation.create), applicationRemarkController.createApplicationRemark);
router.patch('/:id', validate(applicationRemarkValidation.update), applicationRemarkController.updateApplicationRemark);
router.delete('/:id', applicationRemarkController.deleteApplicationRemark);

module.exports = router;
