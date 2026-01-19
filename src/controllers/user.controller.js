const express = require('express');
const {getData,getIdData,updateData,deleteData,patchData}= require('../servicies/user.servicies')
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const result = await getData()
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.get('/:id', async (req, res) => {
    try{
        const {id}= req.params;
        const result = await getIdData(id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const {id}= req.params;
        const {name,surname,email,pwd}= req.body;
        const result = await updateData(id,name,surname,email,pwd)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.delete('/:id', async (req, res) => {
    try{
        const {id}= req.params;
        const result = await deleteData(id)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.patch('/:id', async (req, res) => {
    try {
        const data = req.body;
        const id = req.params.id
        const result = await patchData(id,data)
        res.send(result);
    } catch (error) {
        res.status(404).send(error.message);
    }
})
module.exports = router;