const axios  = require("axios");
//const { where } = require("sequelize");
const {Dog, Temperament} = require("../../db.js");
const {API_KEY} = process.env;

async function getAPIDogs () {
  const getDataURL = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
  const response = await getDataURL.map(e =>{
    return {
      id: e.id,
      name: e.name,
      weight: e.weight.metric,
      height: e.height.metric,
      image: e.image.url,
      life_span: e.life_span.split(" years").filter(e=> e !=="").toString(),
      temperaments: e.temperament,
      createdByMe: false
      }
    })
    console.log(response)
    return response
}

const getDBDogs = async () =>{ //buscamos la info en la DB
  
  const DBDogs = await Dog.findAll({
    include: {
        model: Temperament,
        attributes: ['name'],
        through: {
            attributes: []
        }
    }})
  if(DBDogs){
    return DBDogs.map(e =>{
      return {
        id: e.id,
        name: e.name[0].toUpperCase().concat((e.name.slice(1)).toLowerCase()),
        weight: e.weight,
        height: e.height,
        image: e.image || 'https://cutt.ly/OZrrqEX',
        temperaments: e.temperaments.map(e => e.name).join(),
        life_span: e.life_span,
        createdByMe: e.createdByMe
      }
    })
  }
  }

async function getAllDogs (){
  const DB_Dogs = await getDBDogs();
  const API_Dogs = await getAPIDogs();
  const AllDogs = API_Dogs.concat(DB_Dogs);
  return AllDogs
}

const getAllTemperaments = async () =>{
  const getTemps = (await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)).data;
  const findTemps = await getTemps.map( e => e.temperament);
  let splitTemps = await findTemps.join().split(',')
  splitTemps = splitTemps.map(e => e.trim()).sort()
  splitTemps = splitTemps.filter(e => e !== "")
  const setTemps = [...new Set(splitTemps)];
  setTemps.forEach(e =>{
    if(e){
      Temperament.findOrCreate( { where: { name: e } })} 
  })
  const allTemperaments = await Temperament.findAll() 
  return allTemperaments
}


module.exports = {
    getAllDogs, getAllTemperaments
}