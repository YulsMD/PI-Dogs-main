import React from "react"
import { useDispatch, useSelector} from "react-redux"
import { filterDogsBySrc, filterDogsByTemperament, OrderDogsByWeight, getAllDogs, SortDogsAscDesc } from "../../redux/actions";
import s from '../Menu/Menu.module.css'

export default function Menu ({setOrder, setCurrentPage}){
  const allTemperaments = useSelector(state =>state.temperaments)
  const dispatch = useDispatch();

  const handleRefresh = (e =>{
    dispatch(getAllDogs(e))
  })

  const handleOrderByWeight = (e =>{
    dispatch(OrderDogsByWeight(e.target.value))  
    setOrder(e.target.value)
  })

  const handleOrderAscDesc = (e =>{
    dispatch(SortDogsAscDesc(e.target.value))
    setOrder(e.target.value)
  })

  const handleFilterSource = (e) =>{
    dispatch(filterDogsBySrc(e.target.value),[dispatch])
    setOrder(e.target.value)
    setCurrentPage(1)
  }

  const handleFilterTemperaments = (e =>{
    dispatch(filterDogsByTemperament(e.target.value))
    setOrder(e.target.value)
  })
  
    return (
      <React.Fragment>
        <div className={s.container}>
          <div >
            <button className={s.refresh} onClick={e=>handleRefresh(e)}>CLEAN FILTERS</button>
          </div>
          <div>
              <div className={s.name1}>
                ORDER
              </div>
              <div className={s.container2}>
                <select className={s.select} onChange={e=>handleOrderAscDesc(e)}>
                  <option value = 'asc'>ASC</option>
                  <option value = 'desc'>DESC</option>
              </select>
              <select className={s.select} onChange={e => handleOrderByWeight(e)}>
                <option value = 'weight-min'>LESS WEIGHT</option>
                <option value = 'weight-max'>HIGHER WEIGHT</option>
              </select>
              </div>
              <div className={s.name2}>
                FILTER
              </div>
              <div className={s.container2}>
                <select className={s.select} onChange={e =>handleFilterSource(e)}>
                  <option value = 'all'>ALL</option>
                  <option value={false}>DEFAULT</option>
                  <option value = {true}>CREATEDES</option>
                </select>
                <select className={s.select} onChange={e =>handleFilterTemperaments(e)}>
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
        </div>
      </React.Fragment>
    )
  }
