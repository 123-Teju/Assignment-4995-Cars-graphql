import { Card } from 'antd';
import { currencyFormatter } from '../currency/Currencies';

const InfoCar = ({ car }) => {
  return (
    <Card key={car.id} type="inner">
      {car.year} {car.make} {car.model} {'->'} {currencyFormatter(car.price)}
    </Card>
  );
};

export default InfoCar;
