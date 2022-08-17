const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/events', eventRoutes);

module.exports = router;

