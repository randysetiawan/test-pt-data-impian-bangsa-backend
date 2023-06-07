const dataModel = require("../models/dataModel")

module.exports = {
    getAllData: async (req, res) => {
        try {
            const data = await dataModel.getAllData()
            res.json(data)
        } catch(error) {
            res.status(500).json({ error })
        }
    },

    getData: async (req, res) => {
        const { id } = req.params
        try {
          const data = await dataModel.getData(id)
          if (!data) {
            return res.status(404).json({ error: 'Data not found' })
          }
          res.json(data)
        } catch (error) {
          res.status(500).json({ error })
        }
      },
    
      createData: async (req, res) => {
        const data = req.body
        try {
          await dataModel.createData(data)
          res.sendStatus(201)
        } catch (error) {
          res.status(500).json({ error })
        }
      },
    
      updateData: async (req, res) => {
        const { id } = req.params
        const data = req.body
        try {
          const existingData = await dataModel.getData(id)
          if (!existingData) {
            return res.status(404).json({ error: 'Data not found' })
          }
          await dataModel.updateData(id, data)
          res.sendStatus(200)
        } catch (error) {
          res.status(500).json({ error })
        }
      },
    
      deleteData: async (req, res) => {
        const { id } = req.params
        try {
          const existingData = await dataModel.getData(id)
          if (!existingData) {
            return res.status(404).json({ error: 'Data not found' })
          }
          await dataModel.deleteData(id)
          res.sendStatus(200)
        } catch (error) {
          res.status(500).json({ error })
        }
      },
}