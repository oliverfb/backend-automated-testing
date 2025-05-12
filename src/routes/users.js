const express = require('express');
const userService = require('../services/users');
const router = express.Router();

async function getUser(req, res) {
  try {
    const user = await userService.getUser(1);
    return res.send(user);
  } catch(error) {
     console.error(error);
     return res.send(500);
  }
}

async function createUser(req, res) {
  try {
    const user = await userService.createUser(req.body);
    return res.send(user);
  } catch (error) {
     console.error(error);
     return res.send(500);
  }
}

router.get('/get', getUser);
router.post('/create', createUser);

module.exports = router;
