export default function validations({name , weight_min, weight_max, height_min, height_max, life_span_min, life_span_max, temperaments}){
  let error = {}
  if(!name){error.name= 'Should to insert name'}
  else if(!/^([a-zñáéíóúA-Z][^\d@+.,-_{}]+[\s]?)+$/.test(name)){
    error.name = 'Invalid name'
  }

  if(!weight_min) { error.weight_min = 'Insert weight min'}
  else if (!/^[0-9]*$/.test(weight_min)){
    error.weight_min = 'Only numbers'
  }else if (!/^[0-9]{1,3}$/.test(weight_min)){
    error.weight_min = 'Must be less than 4 digits'
  }

  if(!weight_max) { error.weight_max = 'Insert weight max'}
  else if (!/^[0-9]*$/.test(weight_max)){
    error.weight_max = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(weight_max)){
    error.weight_max = 'Must be less than 4 digits'
  }

  if(parseInt(weight_min) >= parseInt(weight_max)){
    error.weight_max = 'Weight max must be greater'
  }

  if(!height_min) { error.height_min = 'Insert height min'}
  else if (!/^[0-9]+$/.test(height_min)){
    error.height_min = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(height_min)){
    error.height_min = 'Must be less than 4 digits'
  }

  if(!height_max) { error.height_max = 'Insert height max'}
  else if (!/^[0-9]*$/.test(height_max)){
    error.height_max = 'Only numbers, must be less than 4 digits'
  }
  else if (!/^[0-9]{1,3}$/.test(height_max)){
    error.height_max = 'Must be less than 4 digits'
  }

  if(parseInt(height_min) >= parseInt(height_max)){
    error.height_max = 'Height max must be greater'
  }

  if(!life_span_min) { error.life_span_min = 'Insert life span min'}
  else if (!/^[0-9]+$/.test(life_span_min)){
    error.life_span_min = 'Only numbers'
  }
  else if (!/^[0-9]{1,3}$/.test(life_span_min)){
    error.life_span_min = 'Must be less than 4 digits'
  }

  if(!life_span_max) { error.life_span_max = 'Insert life span max'}
  else if (!/^[0-9]*$/.test(life_span_max)){
    error.life_span_max = 'Only numbers, must be less than 4 digits'
  }
  else if (!/^[0-9]{1,3}$/.test(life_span_max)){
    error.life_span_max = 'Must be less than 4 digits'
  }

  if(parseInt(life_span_min) >= parseInt(life_span_max)){
    error.life_span_max = 'Height max must be greater'
  }

  return error
}