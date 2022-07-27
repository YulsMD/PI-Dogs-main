export default function validations({name}){
  let error={}
  if(!name){
    error.name = 'Should to insert name'
  }
  else if(!/^([a-zñáéíóúA-Z]+[\s]+)+$/.test(name)){
    error.name = 'Invalid name'
  }
  return error
}