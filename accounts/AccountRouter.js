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

router.get('/:id', (req, res) => {
    const { id } = req.params
    db('accounts').where({ id })
        .then(account => {
            if(account) {
                res.json(account)
            } else {
                res.status(404).json({
                    message: 'invalid id'
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'there was an error retrieving the data'
            })
        })
})

router.post('/', (req, res) => {
    db('accounts').insert(acctData)
        .then(accts => {
            res.status(201).json({ newAcct: accts[0] })
        })
        .catch(error => {
            res.status(500).json({
                message: 'error adding the account'
            })
        })
    
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    db('accounts').where({ id }).updates(changes)
        .then(count => {
            if (count) {
                res.json({ updated: count })
            } else {
                res.status(404).json({
                    message: 'invalid acct id'
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'there was an error updating the request'
            })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    db('accounts').where({ id }).del()
        .then(count => {
            if(count) {
                res.json({ deleted: count })
            } else {
                res.status(404).json({
                    message: 'invalid id'
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'there was an error deleting the account'
            })
        })
})
module.exports = router