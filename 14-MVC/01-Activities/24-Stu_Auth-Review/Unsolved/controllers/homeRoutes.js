const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
// authenticates the user and keeps the password from passing into the sessions where
// it could potentially be stolen
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // TODO: Add a comment describing the functionality of this property
      //  indicates whether or not the user is logged in
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // if they have successfully logged in it should send them to the main page where they are now logged in and a session has started
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
