const { Router } = require('express');

const AuthController = require('../controllers/Auth');

const authValidatorMiddleware = require('../middlewares/validators/auth');

const router = Router();

router.post('/login', authValidatorMiddleware.login, AuthController.login);

module.exports = router;
