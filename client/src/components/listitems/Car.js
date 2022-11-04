import { EditOutlined } from '@ant-design/icons';
import DeleteCar from '../buttons/DeleteCar';
import { currencies } from '../currency/Currencies';
import UpdateCar from '../forms/UpdateCar';
import { Card } from 'antd';
import { useState } from 'react';

const Car = ({ car, updateCarDetail }) => {
  const [id, setId] = useState(car.id);
  const [year, setYear] = useState(car.year);
  const [make, setMake] = useState(car.make);
  const [mode, setModel] = useState(car.model);
  const [price, setPrice] = useState(car.price);
  const [personId, setPersonId] = useState(car.personId);
  const [editMode, setEditMode] = useState(false);

  const onReset = (data, value) => {
    switch (data) {
      case 'year':
        setYear(value);
        break;
      case 'make':
        setMake(value);
        break;
      case 'model':
        setModel(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'personId':
        setPersonId(value);
        break;
      default:
        break;
    }
  };

  return editMode ? (
    <UpdateCar
      car={car}
      updateCarDetail={updateCarDetail}
      setEditMode={setEditMode}
      onReset={onReset}
    />
  ) : (
    <Card
      title={`${car.year} ${car.make} ${car.model} -> ${currencies(car.price)}`}
      key={car.id}
      actions={[
        <EditOutlined key="edit" onClick={() => setEditMode(!editMode)} />,
        <DeleteCar id={id} />,
      ]}
      type="inner"
    />
  );
};
export default Car;
