const express = require('express');
const {createData,authorithtionData}= require('../servicies/api.servicies')
const router = express.Router();
router.post('/reg', async (req, res) => {
    try{
        const {name,surname,email,pwd}= req.body;
        const result = await createData(name,surname,email,pwd)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
router.post('/auth', async (req, res) => {
    try{
        const {email,pwd}= req.body;
        const result = await authorithtionData(email,pwd)
       res.send(result)

    } catch(error){
         res.status(404).send(error.message)
    }
})
module.exports = router;