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
        res.status(200).json(allDataDogs)
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
      } else{res.status(200).json(allDataDogs)}
    } catch (error) {
      next(error)
    }
})

router.post('/post', async(req,res, next) =>{
  const {name, image, height_min, height_max, weight_min, weight_max, life_span_min, life_span_max, temperaments} = req.body
  if(!name || !height_min || !height_max || !weight_min || !weight_max) res.json('Missing parameters')
  const height = height_min + " - " + height_max;
  const weight = weight_min + " - " + weight_max;
  let life_span = ""
  if(life_span_min && life_span_max){
    life_span = life_span_min + " - " + life_span_max} 
  else if(life_span_min || life_span_max) {
    life_span = (life_span_min ? life_span_min : life_span_max);
  }
  try {
    const newDog = await Dog.create({ name, image, height, weight, life_span})
    if(temperaments.length){
      if(typeof(temperaments) === "string") temperaments = temperaments.split(',');
      const t = await Temperament.findAll({
          where: {
              name: temperaments.map(el => el[0].toUpperCase().concat(el.slice(1)))
          }
      })
          newDog.addTemperament(t)
  };
    //await newDog.addTemperament(temperaments);
    res.status(200).json('Dog was created succesfully')
  } catch (error) {
      next(error)
  }
})

module.exports = router