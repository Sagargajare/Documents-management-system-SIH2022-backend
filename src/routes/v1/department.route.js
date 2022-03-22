const express = require('express');
const departmentController = require('../../controllers/department.controller');
const departmentValidation = require('../../validations/department.validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.get('/', departmentController.allDepartments);
router.get('/:id', departmentController.getDepartment);
router.post('/', validate(departmentValidation.create), departmentController.createDepartment);
router.patch('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
