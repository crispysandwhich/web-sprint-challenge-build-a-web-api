// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Project = require('./projects-model');

router.get('/', (req, res) => {
  
  Project.get(req.params.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => res.status(500).json({message: 'cant access'}))

})


module.exports = router;