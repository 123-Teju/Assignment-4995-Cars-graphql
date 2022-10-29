import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import Title from '../layout/Title';
import { v4 as uuidv4 } from 'uuid';
import { Button, Form, InputNumber, Select } from 'antd';
import { GET_PERSON, ADD_PERSON} from '../../queries';

const AddPerson = () => {
    const [id] = useState();
    const [addPerson] = useMutation(ADD_PERSON);
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }
    , []);

    const { data } = useQuery(GET_PERSON);
    const onFinish = (values) => {
        const { firstName, lastName } = values;
        addPerson({
            variables: { id, firstName, lastName },
            update: (proxy, { data: { addPerson } }) => {
                const { data } = proxy.readQuery({ query: GET_PERSON });
                proxy.writeQuery({
                    query: GET_PERSON,
                    data: {
                        ...data,
                        person: [...data.person, addPerson],
                    },
                });
            },
        });
        form.resetFields();
    }

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
                    <Button type="primary" htmlType="submit"
                    disabled={
                        !form.isFieldsTouched(true) ||
                        form.getFieldsError().filter(({ errors }) => errors.length).length
                    }
                    >
                        Add Person
                    </Button>
                </Form.Item>
            </Form>

        </>
    )
}

export default AddPerson;