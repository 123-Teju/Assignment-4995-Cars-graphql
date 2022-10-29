import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Title from '../layout/Title';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, InputNumber, Select } from 'antd';
import { GET_CARS, GET_PERSON, ADD_CAR } from '../../queries';

const AddCar = () => {
  const [id, setId] = useState(uuidv4());
  const [addCar] = useMutation(ADD_CAR);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const { data } = useQuery(GET_PERSON);
  const onFinish = (values) => {
    const { year, make, model, price, personId } = values;
    addCar({
      variables: { id, year, make, model, price, personId },
      update: (proxy, { data: { addCar } }) => {
        const { data } = proxy.readQuery({ query: GET_CARS });
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
    // data.person.length > 0 &&
    <>
      <Form form={form} name="addCar" onFinish={onFinish}>
        <Form.Item
          name="year"
          label="Year"
          rules={[{ required: true, message: 'Please input the year!' }]}
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
          <InputNumber placeholder="Price" />
        </Form.Item>
        <Form.Item
          name="personId"
          label="Person"
          rules={[{ required: true, message: 'Please input the person!' }]}
        >
          <Select placeholder="Person">
            {data.persons.map((person) => (
              <Select.Option key={person.id} value={person.id}>
                {person.firstName} {person.lastName}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Car
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddCar;
