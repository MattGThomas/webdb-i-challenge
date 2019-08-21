const express = require('express')

const db = require('../data/dbConfig.js')

const router = express.Router()

router.get('/', (req, res) => {
    db('accounts')
        .then(accounts => {
            res.json(accounts)
        })
        .catch(error => {
            res.status(500).json({
                message: 'there was an error retrieving the accounts'
            })
        })
})

router.post('/', (req, res) => {
    
})
module.exports = router