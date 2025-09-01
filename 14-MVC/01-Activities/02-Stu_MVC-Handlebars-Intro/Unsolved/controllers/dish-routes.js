// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// it is a controller and it renders everything onto the main page usin /
const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// the get route select the base page '/' 
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
//  it loads all of the data from all the other files onto this route?
  res.render('all');
});

module.exports = router;
