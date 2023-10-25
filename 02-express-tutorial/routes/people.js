const express = require('express')
const router = express.Router()
let {people} = require('../data.js')
const { addPerson, getPeople, getPerson, changePeople, deletePeople } = require('../controllers/people.js')



router.get('/', getPeople)

router.post('/', addPeople)

router.get('/:id', getPerson)

router.put('/:id', changePeople)

router.delete('/:id', deletePeople)

module.exports = router