const { Router } = require('express');

const OfferController = require('../controllers/Offer');
const AuthMiddleware = require('../middlewares/auth');
const OfferValidator = require('../middlewares/validators/offer');

const router = Router();

router.get('/', AuthMiddleware.authorize, OfferValidator.list, OfferController.list);

module.exports = router;
