import InfoCar from "../listitems/InfoCar";
import { List } from 'antd';

const CarInfo = ({ car }) => {
    return (
        <List
            dataSource={car}
            renderItem={car => (
                <List.Item key={car.id}>
                    <InfoCar car={car} />
                </List.Item>
            )}
        />
    )
}

export default CarInfo;