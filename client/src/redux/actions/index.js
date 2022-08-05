import axios from "axios"

export const getAllDogs = () =>{
return function(dispatch){
  axios.get('http://localhost:3001/dogs').then(response=>dispatch({
    type: 'GET_ALL_DOGS', payload: response.data
  }))
}}

export const getAllTemperaments = () =>{
  return async function(dispatch){
    var json = await axios.get('http://localhost:3001/temperaments')
    return dispatch({
      type: 'GET_ALL_TEMPERAMENTS',
        payload: json.data
    })
  }
}
export const getDetails = (id) =>{
    return async function(dispatch){
      var json = await axios.get(`http://localhost:3001/dogs/${id}`)
      return dispatch({
        type: 'GET_DOG_DETAILS',
          payload: json.data
      })
    }
  }

export const SearchDogByName = (name) =>{
  return async function(dispatch) {
    try {
    const res = await axios.get(`http://localhost:3001/dogs?name=${name}`)
    console.log(res.data)
    return dispatch ({
        type: 'GET_BY_NAME',
        payload: res.data
    })
    } catch (error) {
        alert('Dog not found')
    }
  } 
}

export function filterDogsBySrc (payload){
  return {
    type: 'FILTER_BY_SOURCE',
    payload
  }
}

export function filterDogsByTemperament (payload){
  return{
    type: 'FILTER_BY_TEMPERAMENT',
    payload
  }
}

export function OrderDogsByWeight(payload){
  return{
    type: 'ORDER_BY_WEIGHT',
    payload
  }
}

export function SortDogsAscDesc(payload){
  return{
    type: 'SORT_ASC_DESC',
    payload
  }
}

export function CreateNewDog(payload){
  return async function (dispatch) {
  try {
      const res = await axios.post('http://localhost:3001/dogs/post', payload)
      console.log(res)
      return res
  } catch (error) {
    console.log(error)
  }}}

export function clearState(){
  return{
    type: 'CLEAR_STATE'
  }

}