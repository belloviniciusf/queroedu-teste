const { Router } = require('express');

const UserController = require('../controllers/User');
const ValidatorMiddleware = require('../middlewares/validators/user');

const router = Router();

router.post('/', ValidatorMiddleware.create, UserController.create);

module.exports = router;
