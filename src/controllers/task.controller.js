const express = require('express');
const {checkTaskBody,checkTaskId}= require('../helper/middleware')
const {addTask,getTask,getTaskId,updateTask,deleteTask,patchTask}= require('../servicies/task.servicies')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const result = await getTask()
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.get('/:id',checkTaskId, async (req, res) => {
    try{
        const id= req.params.id;
        const result = await getTaskId(id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.post('/', checkTaskBody, async (req, res) => {
    try{
        const {task,user_id}= req.body;
        const result = await addTask(task,user_id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.put('/:id', checkTaskBody,checkTaskId, async (req, res) => {
    try{
        const {id}= req.params;
        const {task,user_id}= req.body;
        const result = await updateTask(id,task,user_id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.delete('/:id',checkTaskId, async (req, res) => {
    try{
        const {id}= req.params;
        const result = await deleteTask(id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.patch('/:id',checkTaskId, async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id
        const result = await patchTask(id,data)
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
})
module.exports = router;