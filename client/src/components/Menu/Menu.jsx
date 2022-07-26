import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { filterDogsBySrc, filterDogsByTemperament, OrderDogsByWeight, getAllDogs, SortDogsAscDesc } from "../../redux/actions";

export default function Menu ({setCurrentPage, setOrder}){
  const allTemperaments = useSelector(state =>state.temperaments)
  const dispatch = useDispatch();

  const handleRefresh = (e =>{
    dispatch(getAllDogs(e))
    setCurrentPage(1)
  })

  const handleOrderByWeight = (e =>{
    dispatch(OrderDogsByWeight(e.target.value))
    setCurrentPage(1)
    setOrder(`${e.target.value}`)
  })

  const handleOrderAscDesc = (e =>{
    dispatch(SortDogsAscDesc(e.target.value))
    setCurrentPage(1)
    setOrder(`${e.target.value}`)
  })

  const handleFilterSource = (e) =>{
    e.preventDefault()
    setCurrentPage(1)
    dispatch(filterDogsBySrc(e.target.value))
    setOrder(`${e.target.value}`)
  }

  const handleFilterTemperaments = (e =>{
    e.preventDefault()
    setCurrentPage(1)
    dispatch(filterDogsByTemperament(e.target.value))
    setOrder(`${e.target.value}`)
  })
  
    return (
      <React.Fragment>
        <button onClick={e=>handleRefresh(e)}>REFRESH</button>
        <div>
          <div>
            <select onChange={e=>handleOrderAscDesc(e)}>
              <option hidden>SORT IN</option>
              <option value = 'asc'>ASCENDENT WAY</option>
              <option value = 'desc'>DESCENDENT WAY</option>
            </select>
            <select onChange={e => handleOrderByWeight(e)}>
              <option hidden>ORDER DOGS BY...</option>
              <option value = 'weight-min'>LESS WEIGHT</option>
              <option value = 'weight-max'>HIGHER WEIGHT</option>
            </select>
          </div>
          <div>
            <select onChange={e =>handleFilterSource(e)}>
              <option hidden>WANT TO SEE...</option>
              <option value = 'all'>ALL DOGS</option>
              <option value={false}>EXISTING</option>
              <option value = {true}>CREATEDES</option>
            </select>
            <select onChange={e =>handleFilterTemperaments(e)}>
              <option hidden>WHAT DOGS ARE...</option>
              <option value = 'all'>ALL TEMPERAMENTS</option>
              {
                allTemperaments?.map(e =>{
                  return(
                    <option value={e.name} key ={e.id}>
                      {e.name}
                    </option>)
                })
              }
            </select>
          </div>
        </div>
      </React.Fragment>
    )
  }

