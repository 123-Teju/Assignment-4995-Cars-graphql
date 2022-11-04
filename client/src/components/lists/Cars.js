import { List } from 'antd';
import { GET_CARS } from '../../queries';
import { useQuery } from '@apollo/client';
import Car from '../listitems/Car';

const Cars = ({ personId, people }) => {
  const { data } = useQuery(GET_CARS, {
    fetchPolicy: 'cache-and-network',
  });

  const car = data.Cars.filter((car) => car.personId === personId);

  return (
    <List
      dataSource={car}
      renderItem={(car) => (
        <List.Item key={car.id}>
          <Car car={car} people={people} />
        </List.Item>
      )}
    />
  );
};

export default Cars;
