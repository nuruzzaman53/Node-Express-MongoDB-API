const express = require('express')
const Task    = require('../models/taskModel')
const router  = express.Router()

/* Add a New task*/
router.post('/add',async (req,res) => {
    const newTask = new Task(req.body)
    await newTask.save((err) => {
        if(err) {
            res.status(500).json(err)
        } else{
            res.status(200).send('New Task Added')
        } 
    })
})

/* Get all todo */
router.get('/all',async (req,res) => {
   await Task.find({status:'active'},(err,data) => {
        if(err) {
            res.status(500).json(err)
        } else{
            res.status(200).json(data)
        } 
    })
})

/* Get Todo by ID */

router.get('/:id',async (req,res) => {
  await Task.findById({_id:req.params.id},(err,data) => {
    if(err) {
        res.status(500).send(err)
    }
    res.send({data})
  })
})

/* Update todo by ID */
router.put('/:id',async (req,res) => {
    await Task.findByIdAndUpdate(
        { _id : req.params.id},
        { $set: { status: 'active' }},
        {
            new:true,
            useFindAndModify:false
        },
        (err,data) => {
        if(err) {
            res.status(500).send(err)
        }
        res.send({data})
    }
  )
})

/* Delete todo by ID */
router.delete('/:id',async (req,res) => {
    await Task.deleteOne({_id:req.params.id},(err) => {
        if(err){
            res.status(500).json({
                error:'Server side Error'
            })
        } else {
            res.status(200).json({
                message:'Data Deleted'
            })
        }
    })
})

module.exports = router