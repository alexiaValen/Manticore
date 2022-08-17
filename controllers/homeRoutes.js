const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['email', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Resources page
router.get('/resources', async (req, res) => {
  try {
    res.render('resources', {loggedIn: req.session.LoggedIn});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
} );
// Events Page
router.get('/events', async (req, res) => {
  try {
    res.render('events', {loggedIn: req.session.LoggedIn});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
} );

// Community Page
router.get('/community', async (req, res) => {
  try {
    res.render('community', {loggedIn: req.session.LoggedIn});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
} );

// Home Page
router.get('/homepage', async (req, res) => {
  try {
    res.render('homepage', {loggedIn: req.session.LoggedIn});
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
} );



    




module.exports = router;
