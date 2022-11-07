import { currencies } from '../currency/Currencies';
import { Card } from 'antd';

const InfoCar = ({ car }) => {
  return (
    <Card key={car.id} type="inner">
      {car.year} {car.make} {car.model} {currencies[car.price]}
    </Card>
  );
};

export default InfoCar;
