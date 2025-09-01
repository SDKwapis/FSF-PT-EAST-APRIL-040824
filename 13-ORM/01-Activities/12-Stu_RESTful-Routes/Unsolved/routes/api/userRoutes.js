const router = require('express').Router();
const User = require('../../models/User');

// TODO: Implement each of the three routes below using `async/await`
// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
   try {
    const getUser = await User.findByPk(req.params.id);
    if(!userData) {
        res.status(404).json({message: "no user found"});
        return;
    };
    res.status(200).json(getUser)
   } catch (err) {
    res.status(500).json({message: "Internal Issues"});
   }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
    try {
        const updateUser = await User.put(req)
    } catch (err) {

    }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
    try {

    } catch {

    }
});

module.exports = router;
