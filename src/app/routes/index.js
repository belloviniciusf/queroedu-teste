const { Router } = require('express');

const authRouter = require('./auth');
const userRouter = require('./user');
const courseRouter = require('./course');
const offerRouter = require('./offer');

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/courses', courseRouter);
router.use('/offers', offerRouter);

module.exports = router;
