import { List } from 'antd';
import DetailPageCar from '../listitems/InfoCar';

const CarInfo = ({ cars }) => {
  return (
    <List
      dataSource={cars}
      renderItem={(car) => (
        <List.Item key={car.id}>
          <DetailPageCar car={car} />
        </List.Item>
      )}
    />
  );
};

export default CarInfo;
