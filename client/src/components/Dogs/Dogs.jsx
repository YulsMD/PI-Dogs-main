import { React, Component, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { getAllDogs, getAllTemperaments } from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Loader from "../Loader/Loader";
import s from "../Dogs/Dogs.module.css";

export class Dogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      currentDogs: this.props.currentDogs,
    };
  }

  componentDidMount() {
    this.setState({
      loader: true,
    });
    this.props.getDogs();
    this.props.getTemperaments();
    this.setState({ loader: false });
  }
  render() {
    console.log(this.props.currentDogs);
    return (
      <div>
        {this.state.loader ? (
          <div className={s.loader}>
            <Loader />
          </div>
        ) : (
          <div className={s.container}>
            {this.props.currentDogs?.map((dog) => {
              return (
                <DogCard
                  key={dog.id}
                  id={dog.id}
                  name={dog.name}
                  temperaments={dog.temperaments}
                  weight={dog.weight}
                  image={dog.image}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getDogs: () => dispatch(getAllDogs()),
    getTemperaments: () => dispatch(getAllTemperaments()),
  };
}

export default connect(null, mapDispatchToProps)(Dogs);

/* export default function Dogs({currentDogs}){
  
  const [loader, setLoader] = useState(false)

  const dispatch = useDispatch()
  useEffect(() =>{
    setLoader(true)
    dispatch(getAllDogs());
    dispatch(getAllTemperaments())
    .then(()=>setLoader(false))
  }, [dispatch]);
  return ( 
    <div>
    {
    loader
    ? <div className={s.loader}><Loader/></div>
    :(
        <div className={s.container}>
          {
            currentDogs?.map(dog => {
              return <DogCard
                key = {dog.id}
                id = {dog.id}
                name = {dog.name}
                temperaments = {dog.temperaments}
                weight = {dog.weight}
                image = {dog.image}
              />
            })
            }
        </div>
      )
    }
    </div>
  )
} */
