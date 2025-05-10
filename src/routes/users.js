const express = require('express');
const userService = require('../services/users');
const router = express.Router();

async function getUser(req, res) {
  const user = await userService.getUser(1);
  return res.send(user);
}

async function createUser(req, res) {
  const user = await userService.createUser(req.body);
  return res.send(user);
}

router.use('/get', getUser);
router.use('/create', createUser);

module.exports = router;
