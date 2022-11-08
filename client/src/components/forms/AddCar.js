import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, InputNumber, Select } from 'antd';
import { currencies, Currency } from '../currency/Currencies';
import { GET_CARS, GET_PEOPLE, ADD_CAR } from '../../queries';

const AddCar = () => {
  const [id, setId] = useState(uuidv4());
  const [addCar] = useMutation(ADD_CAR);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();
  const { Option } = Select;

  useEffect(() => {
    forceUpdate({});
  }, []);

  const { data, error } = useQuery(GET_PEOPLE, {
    fetchPolicy: 'cache-and-network',
  });
  if (error) return `Error! ${error.message}`;

  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;
    addCar({
      variables: { id, year, make, model, price, personId },
      update: (proxy, { data: { addCar } }) => {
        const data = proxy.readQuery({ query: GET_CARS });
        proxy.writeQuery({
          query: GET_CARS,
          data: {
            ...data,
            cars: [...data.cars, addCar],
          },
        });
      },
    });
    form.resetFields();
    setId(uuidv4());
  };

  return (
    data?.person?.length > 0 && (
      <>
        <Form form={form} name="addCar-form" onFinish={onFinish}>
          <Form.Item
            name="year"
            label="Year"
            rules={[{ required: true, message: 'Please enter the cars year!' }]}
          >
            <InputNumber placeholder="Year" />
          </Form.Item>
          <Form.Item
            name="make"
            label="Make"
            rules={[{ required: true, message: 'Please input the make!' }]}
          >
            <InputNumber placeholder="Make" />
          </Form.Item>
          <Form.Item
            name="model"
            label="Model"
            rules={[{ required: true, message: 'Please input the model!' }]}
          >
            <InputNumber placeholder="Model" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: 'Please input the price!' }]}
          >
            <InputNumber
              placeholder="Price"
              formatter={currencies}
              parser={Currency}
            />
          </Form.Item>
          <Form.Item
            name="personId"
            label="Person"
            rules={[{ required: true, message: 'Please input the person!' }]}
          >
            <Select placeholder="Person">
              {data.people.map((person) => (
                <Option key={person.id} value={person.id}>
                  {person.firstName} {person.lastName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item shouldUpdate={true}>
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                (!form.isFieldTouched('year') &&
                  !form.isFieldTouched('make') &&
                  !form.isFieldTouched('model') &&
                  !form.isFieldTouched('price') &&
                  !form.isFieldTouched('personId')) ||
                form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Add Car
            </Button>
          </Form.Item>
        </Form>
      </>
    )
  );
};

export default AddCar;