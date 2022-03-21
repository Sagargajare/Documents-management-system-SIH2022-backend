const express = require('express');
const applicationLocationController = require('../../controllers/applicationLocation.controller');

const router = express.Router();

router.get('/', applicationLocationController.allApplicationLocations);
router.get('/:id', applicationLocationController.getApplicationLocation);
router.post('/', applicationLocationController.createApplicationLocation);
router.patch('/:id', applicationLocationController.updateApplicationLocation);
router.delete('/:id', applicationLocationController.deleteApplicationLocation);

module.exports = router;
