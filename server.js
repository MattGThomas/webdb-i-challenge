const express = require('express');

// const db = require('./data/dbConfig.js');
const AcctRouter = require('./accounts/AccountRouter.js')
const server = express();

server.use(express.json());

server.use('/api/accounts', AcctRouter)

server.get('/', (req, res) => {
    res.send('<h2>Accounts:<h2>')
})
module.exports = server;