// import { ADD_PERSON } from "../../queries"
import AddCar from "../forms/AddCar"
import AddPerson from "../forms/Addperson"
import Title from "../layout/Title"
import Person from '../lists/Person'

function Home() {
  return (
    <>
    <AddPerson />
    <AddCar />
    <Title />
    <Person />
    </>
  )
}

export default Home
