const express = require('express');
const {addTask,getTask,getTaskId}= require('../servicies/task.servicies')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const result = await getTask()
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.get('/:id', async (req, res) => {
    try{
        const id= req.params.id;
        const result = await getTaskId(id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.post('/', async (req, res) => {
    try{
        const {task,user_id}= req.body;
        const result = await addTask(task,user_id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
module.exports = router;