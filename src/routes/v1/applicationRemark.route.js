const express = require('express');
const applicationRemarkController = require('../../controllers/applicationRemark.controller');

const router = express.Router();

router.get('/', applicationRemarkController.allApplicationRemarks);
router.get('/:id', applicationRemarkController.getApplicationRemark);
router.post('/', applicationRemarkController.createApplicationRemark);
router.patch('/:id', applicationRemarkController.updateApplicationRemark);
router.delete('/:id', applicationRemarkController.deleteApplicationRemark);

module.exports = router;
