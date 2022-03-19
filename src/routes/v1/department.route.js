const express = require('express');
const departmentController = require('../../controllers/department.controller');

const router = express.Router();

router.get('/', departmentController.allDepartments);
router.get('/:id', departmentController.getDepartment);
router.post('/', departmentController.createDepartment);
router.patch('/:id', departmentController.updateDepartment);
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
