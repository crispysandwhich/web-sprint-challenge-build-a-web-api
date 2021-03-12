// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Project = require('./projects-model');

router.get('/', (req, res) => {
  console.log(Project)
})


module.exports = router;