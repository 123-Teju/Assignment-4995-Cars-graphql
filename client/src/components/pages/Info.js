// import Title from '../layout/Title';
import CarInfo from '../lists/CarInfo';
import { GET_PERSON_CARS } from '../../queries';
import { Card } from 'antd';
import { useQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';

const Info = () => {
  const { personId } = useParams();
  const { data } = useQuery(GET_PERSON_CARS, {
    variables: { id: personId },
    fetchPolicy: 'cache-and-network',
  });

  return (
    <>
      <Card
        title={`${data.personCars.person.firstName} ${data.personCars.person.lastName}`}
        extra={<Link to={'/'}>Go Back Home</Link>}
      >
        <CarInfo cars={data.personCars.cars} />
      </Card>
    </>
  );
};

export default Info;
