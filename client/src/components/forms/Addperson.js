import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, InputNumber} from 'antd';
import { GET_PEOPLE, ADD_PERSON } from '../../queries';

const AddPerson = () => {
  const [id] = useState(uuidv4);
  const [addPerson] = useMutation(ADD_PERSON);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const { firstName, lastName } = values;
    addPerson({
      variables: { id, firstName, lastName },
      update: (proxy, { data: { addPerson } }) => {
        const { data } = proxy.readQuery({ query: GET_PEOPLE });
        proxy.writeQuery({
          query: GET_PEOPLE,
          data: {
            ...data,
            person: [...data.person, addPerson],
          },
        });
      },
    });
    form.resetFields();
  };

  return (
    <>
      <Form form={form} name="addPerson" onFinish={onFinish}>
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please input the first name!' }]}
        >
          <InputNumber placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please input the last name!' }]}
        >
          <InputNumber placeholder="Last Name" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              (!form.isFieldTouched('firstName') &&
                !form.isFieldTouched('lastName')) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Add Person
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddPerson;
