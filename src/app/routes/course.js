const { Router } = require('express');

const CourseController = require('../controllers/Course');
const AuthMiddleware = require('../middlewares/auth');
const CourseValidator = require('../middlewares/validators/course');

const router = Router();

router.get('/', AuthMiddleware.authorize, CourseValidator.list, CourseController.list);

module.exports = router;
