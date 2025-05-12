const express = require('express');
const userService = require('../services/status');
const router = express.Router();

async function getStatus(req, res) {
  const status = await userService.getStatus(1);
  return res.send(status);
}

async function createStatus(req, res) {
  const status = await userService.createStatus(req.body);
  return res.send(status);
}

router.use('/get', getStatus);
router.use('/create', createStatus);

module.exports = router;
