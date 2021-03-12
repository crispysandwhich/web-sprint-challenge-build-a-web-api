// Write your "actions" router here!
const express = require('express');
const router = express.Router();

const Actions = require('./actions-model');


// [GET] /api/actions
router.get('/', (req, res) => {
  Actions.get(req.query.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => res.status(500).json({message: 'not able to comeplete action'}))
})

// [GET] /api/actions/:id
router.get('/:id', (req,res) => {
  Actions.get(req.params.id)
    .then(data => {
      if(!data){
        res.status(404).json({message: 'sorry, is that the correct user'})
      }else{
        res.status(200).json(data)
      }
    })
    .catch(err => res.status(404).json({message: `sorry but nothing was found with ${req.params.id}`}))
})

// [POST] /api/actions
router.post('/', (req,res) => {

  if(req.params.id > 0){

    Actions.insert(req.body)
      .then(data => res.status(201).json(data) )
      .catch(e => res.status(500).json({message: 'can post bro'}))

  }else{
    res.status(500).json({message: 'this is broken'})
  }

})

// [PUT] /api/actions/:id
router.put('/:id', (req,res) => {

  if (req.params.id > 0){

    Actions.update(req.params.id, req.body)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(e => res.status(500).json({message: 'cant update'}))

  }else{
    res.status(500).json({message: 'this is broken'})
  }

})

// [DELETE] /api/actions/:id
router.delete('/:id', (req,res) => {

  if(req.params.id > 0){

    Actions.remove(req.params.id)
      .then(() => res.status(200).json({message: 'twas deleted successfully'}))
      .catch(() => res.status(500).json({message: 'your profile cursed cant delete'}))

  }else{
    res.status(500).json({message: 'this is broken'})
  }

} )



module.exports = router;