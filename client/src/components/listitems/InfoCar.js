import {currencies} from '../currency/Currencies';
import {Card} from 'antd';

const InfoCar = ({car}) => {
    return (
        <Card
           type='inner'>
            {car.year} {car.make} {car.model} {currencies[car.price]} 
        </Card>
    )
}

export default InfoCar;