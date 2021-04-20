const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');


// signup a user
router.post('/signup', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    
    const userData = await userController.signUp(username, password);

    return res.status(201).send(userData);
  } catch (error) {
    res.status(400).send(error.message);
  }
});





// user login
router.post('/login', async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userController.logIn(username, password);
    if (user) {
      return res.status(200).send('user is logged in');
    } else return res.status(401).send('username/password not found');
  } catch (error) {
    res.status(500).send(error.messagge);
  }
});


module.exports = router;