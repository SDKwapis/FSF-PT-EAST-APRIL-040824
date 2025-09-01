const express = require('express');
const router = express.Router();
const { User } = require('../models/User'); 

router.get('/', async (req, res) => {
  try {
    const newNames = await User.findAll({
      attributes: { exclude: ['password']},
      order: [['name', 'ASC']]
    });
    const users = newNames.map((user) => user.get({ plain: true }));
    res.render('homepage', { users }); 
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json(err);
  }
});

module.exports = router;

