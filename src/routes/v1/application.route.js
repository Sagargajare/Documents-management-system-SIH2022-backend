const express = require('express');
const applicationController = require('../../controllers/application.controller');

const router = express.Router();

router.get('/', applicationController.allApplications);
router.get('/:id', applicationController.getApplication);
router.post('/', applicationController.createApplication);
router.patch('/:id', applicationController.updateApplication);
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;
