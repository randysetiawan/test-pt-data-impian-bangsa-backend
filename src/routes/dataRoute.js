const express = require('express')
const router = express.Router()

const dataController = require('../controllers/dataController')

router.get('/', dataController.getAllData)
router.get('/:id', dataController.getData)
router.post('/', dataController.createData)
router.put('/:id', dataController.updateData)
router.delete('/:id', dataController.deleteData)

module.exports = router