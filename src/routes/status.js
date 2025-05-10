const express = require("express")
const statusService = require("../services/status")
const router = express.Router()




async function getStatus(req, res) {
  try {
    const status = await statusService.getStatus(req.query.id)
    return res.send(status)
  } catch (err) {
    console.error(err)
    return res.send(500)
  }
}

async function createStatus(req, res) {
  try {
    const newStatus = await statusService.createStatus(req.body)
    return res.send(newStatus)
  } catch (err) {
    console.error(err)
    return res.send(500)
  }
}


router.get("/get", getStatus)
router.post("/create", createStatus)


module.exports = router