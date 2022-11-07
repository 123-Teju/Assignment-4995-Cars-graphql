import { Button, Form, InputNumber } from 'antd';
import { UPDATE_PERSON } from '../../queries';
import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';

const UpdatePerson = ({ person, updatePersonDetail, setEditMode }) => {
  const [id] = useState(person.id);
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const [updatePerson] = useMutation(UPDATE_PERSON);
  const [form] = Form.useForm();
  const [, forceUpdate] = useState();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    const { firstName, lastName } = values;
    updatePerson({
      variables: { id, firstName, lastName },
    });
    form.resetFields();
    setEditMode(false);
  };

  const onReset = (data, value) => {
    updatePersonDetail(data, value);
    switch (data) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form
      form={form}
      name="updatePerson"
      onFinish={onFinish}
      initialValues={{
        firstName: firstName,
        lastName: lastName,
      }}
    >
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your first name',
          },
        ]}
      >
        <InputNumber
          value={firstName}
          onChange={(event) => onReset('firstName', event.target.value)}
        />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your last name',
          },
        ]}
      >
        <InputNumber
          value={lastName}
          onChange={(event) => onReset('lastName', event.target.value)}
        />
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
          Update
        </Button>
      </Form.Item>
      <Button onClick={() => setEditMode(false)}>Cancel</Button>
    </Form>
  );
};

export default UpdatePerson;
