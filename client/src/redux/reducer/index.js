const initialState = {
  dogs: [],
  allDogs: [],
  temperaments: [],
  details: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_DOGS':
      return{
        ...state,
        dogs: action.payload,
        allDogs: action.payload
      }
    
    case 'GET_ALL_TEMPERAMENTS':
      return{
        ...state,
        temperaments: action.payload
      }

    case 'GET_DOG_DETAILS':
      return{
        ...state,
        details: action.payload
      }
        
    case 'FILTER_BY_SOURCE':
      const allDogs = state.allDogs
      const sourceFiltered = action.payload === 'all' ? allDogs 
      : allDogs.filter(e => e.createdByMe.toString() === action.payload)
      return {
        ...state,
        dogs: sourceFiltered
      }

    case 'FILTER_BY_TEMPERAMENT':
      const temperamentFiltered = action.payload === 'all' ? state.allDogs :
      state.allDogs?.filter(e=>{
        if(typeof(e.temperaments)=== 'string') return e.temperaments.includes(action.payload);
        if(Array.isArray(e.temperaments)){
         let temps = e.temperaments.map(e=>e.name)
         return temps.includes(action.payload)
        }
      })
      return{
        ...state,
        dogs: temperamentFiltered
      }

    case 'ORDER_BY_WEIGHT':
      const dogsOrderByWeight = action.payload === 'weight-min' 
      ? state.allDogs.sort((a,b)=>{
        let [a_Min, a_Max] = a.weight.split(' - ');
        let [b_Min, b_Max] = b.weight.split(' - ');
        if (parseInt(a_Min) > parseInt(b_Min)) return 1;
          else if (parseInt(a_Min) < parseInt(b_Min)) return -1;
            else {
              if (parseInt(a_Max) > parseInt(b_Max)) return 1;
                else if (parseInt(a_Max) < parseInt(b_Max)) return -1;
                  else return 0 
                }
              })
      : state.allDogs.sort((a,b)=>{
        let [a_Min, a_Max] = a.weight.split(' - ');
        let [b_Min, b_Max] = b.weight.split(' - ');
        if (parseInt(a_Max) < parseInt(b_Max)) return 1;
          else if (parseInt(a_Max) > parseInt(b_Max)) return -1;
            else {
              if (parseInt(a_Min) < parseInt(b_Min)) return 1;
                else if (parseInt(a_Min) > parseInt(b_Min)) return -1;
                  else return 0
                }
              })
      return{
        ...state,
        dogs: dogsOrderByWeight
      }

    case 'SORT_ASC_DESC':
    const OrderDogsByName = action.payload === 'asc' 
    ? state.dogs.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    : state.dogs.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1)
    return{
      ...state,
      dogs: OrderDogsByName
    }

    case 'GET_BY_NAME':
    return{
      ...state,
      dogs: action.payload
    }

    case 'CREATE_DOG':
      return{
        ...state
      }
  
    default:
      return{
        ...state
      }
  }
}

export default rootReducer
