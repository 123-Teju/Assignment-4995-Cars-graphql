import { useQuery } from '@apollo/client'
import { GET_CARS } from '../../queries';
import { List } from 'antd';
import Car from '../listitems/Car';



const Cars = ({ people, personId }) => {

    const { loading, error, data } = useQuery(GET_CARS, {
        fetchPolicy: 'cache-and-network'
        });
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    const cars = data.cars.filter(car => car.personId === personId);

    return (
        <List
            grid={{ gutter: 16, column: 1 }}
            dataSource={cars}
            renderItem={car => (
                <List.Item key={car.id}>
                    <Car car={car} people={people} />
                </List.Item>
            )}
        
        />
    );
}

export default Cars;