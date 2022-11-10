import AddCar from '../forms/AddCar';
import AddPerson from '../forms/AddPerson';
import Title from '../layout/Title';
import People from '../lists/Person';

const Home = () => {
  return (
    <>
      <AddPerson />
      <AddCar />
      <Title text="Records" />
      <People />
    </>
  );
};
export default Home;
