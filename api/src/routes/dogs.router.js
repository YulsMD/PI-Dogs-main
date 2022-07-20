const axios  = require("axios");
const express = require('express');
const router = express.Router();
const {Dog, Temperament} = require ('../db.js')
const {getAllDogs} = require ('./controller/index.controller.js')

router.get('/', async (req, res, next) =>{
  const {name} = req.query;
  const allDataDogs = await getAllDogs();
    try {
      if (name){
        const dogByName = allDataDogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        dogByName.length ? res.json(dogByName) : res.json('Dog not found')
      }else{
        res.json(allDataDogs)
      }
    } catch (error) {
        next(error)
    } 
}) 

router.get('/:id', async (req, res, next) =>{
    try {
      const {id} = req.params;
      const allDataDogs = await getAllDogs();
      if (id){
        const dogByID = allDataDogs.find( e => (e.id == (id)))
        dogByID ? res.json(dogByID) : res.json('ID not exists')
      } else{res.json(allDataDogs)}
    } catch (error) {
      next(error)
    }
})

router.post('/post', async(req,res, next) =>{
  const {name, image, height, weight, life_span, temperaments} = req.body
  if(!name || !height || !weight) res.json('Missing parameters')
  try {
    const newDog = await Dog.create({ name, image, height, weight, life_span})
    await newDog.addTemperament(temperaments);
    res.json('Dog was created succesfully')
  } catch (error) {
      next(error)
  }
})

module.exports = router