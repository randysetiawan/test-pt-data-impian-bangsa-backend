const express = require('express')
const router = express.Router()

const dataController = require('../controllers/dataController')

router.get('/data/getall')
router.get('/data/:id', dataController.getDataById)
router.post('/data/create', dataController.createData)
router.put('/data/:id', dataController.updateData)
router.delete('/data/:id', dataController.deleteData)

module.exports = router