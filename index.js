const express = require('express');
const bodyParser = require('body-parser');
const controller1 = require('./src/controllers/user.controller')
const controller2 = require('./src/controllers/api.controller')
const controller3 = require('./src/controllers/task.controller')
const app = express();

app.use('/', bodyParser.json());
app.use('/user', controller1)
app.use('/api', controller2)
app.use('/task', controller3)

app.use('/', (err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(3000, () => {
    console.log('ready');
})