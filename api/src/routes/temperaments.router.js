const express = require('express')
const router = express.Router();
const {getAllTemperaments} = require('./controller/index.controller.js')

router.get('/', async (req, res, next) =>{
      try {
        const allTemperaments = await getAllTemperaments();
        res.json(allTemperaments)
      } catch (error) {
          next(error)
      } 
  }) 

module.exports = router //no olvides exportar el router PLEEAAASEEE!