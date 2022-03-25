const express = require('express');
const applicationLocationController = require('../../controllers/applicationLocation.controller');
const applicationLocationValidation = require('../../validations/applicationLocation.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', applicationLocationController.allApplicationLocations);
router.get('/:id', applicationLocationController.getApplicationLocation);
router.post('/', validate(applicationLocationValidation.create), applicationLocationController.createApplicationLocation);
router.patch(
  '/:id',
  validate(applicationLocationValidation.update),
  applicationLocationController.updateApplicationLocation
);
router.delete('/:id', applicationLocationController.deleteApplicationLocation);

module.exports = router;
