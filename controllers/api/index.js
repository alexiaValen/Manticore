const router = require('express').Router();
const userRoutes = require('./userRoutes');
const parentRoutes = require('./parentRoutes');

router.use('/users', userRoutes);
router.use('/parents', parentRoutes);

module.exports = router;