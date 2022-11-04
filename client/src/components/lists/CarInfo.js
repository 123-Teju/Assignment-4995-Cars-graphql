import InfoCar from '../listitems/InfoCar';
import { List } from 'antd';

const Styles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

const CarInfo = ({ car }) => {
  const styles = Styles();
  return (
    <List
      style={styles.list}
      dataSource={car}
      renderItem={(car) => (
        <List.Item key={car.id}>
          <InfoCar car={car} />
        </List.Item>
      )}
    />
  );
};

export default CarInfo;
