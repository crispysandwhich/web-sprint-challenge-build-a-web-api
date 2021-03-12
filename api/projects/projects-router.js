// Write your "projects" router here!
const express = require('express');
const router = express.Router();

const Project = require('./projects-model');

// [GET] /api/projects
router.get('/', (req, res) => {
  
  Project.get()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(e => res.status(500).json({message: 'cant access'}))

})

// [GET] /api/projects/:id
router.get('/:id', (req,res) => {

  Project.get(req.params.id)
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).json({message: e.message}))

})

// [POST] /api/projects
router.post('/', (req,res) => {

  if(req.params.id){

    Project.insert(req.body)
      .then(data => res.status(200).json(data))
      .catch(e => res.status(500).json({message: 'not able to post'}))

  }else{
    res.status(500).json({message: 'broken bb'})
  }


})

// [PUT] /api/projects/:id
router.put('/:id', (req,res) => {


  if(req.params.id){
    Project.update(req.params.id, req.body)
      .then(data => res.status(200).json(data))
      .catch(e => res.status(500).json({message: "cannot update"}))
  }else{
    res.status(500).json({message: 'broken bb'})
  }

})

// [DELETE] /api/projects/:id
router.delete('/:id', (req,res) => {

  if(req.params.id){

    Project.remove(req.params.id)
      .then(() => res.status(200).json({message: 'User delete'}))
      .catch(e => res.status(500).json({message: e.message}))

  }else{
    res.status(500).json({message: 'broken bb'})
  }

})


// [GET] /api/projects/:id/actions

router.get("/:id/actions", (req,res) => {
  if(req.params.id){

    Project.getProjectActions(req.params.id)
    .then(project=>{res.status(200).json(project)})
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"server error occured"})
    })
    
  }else{
    res.status(500).json({message: 'broken bb'})
  }
})






module.exports = router;