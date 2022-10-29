import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
// import Title from '../layout/Title';
import { Button, Form, InputNumber, Select} from 'antd';
import { UPDATE_CAR } from '../../queries';
import { currencies, Currency } from '../currency/Currencies';

const UpdateCar = ({ car, updateCarDetail, setEditMode }) => {
    const [id] = useState();
    const [year, setYear] = useState(car.year);
    const [make, setMake] = useState(car.make);
    const [model, setModel] = useState(car.model);
    const [price, setPrice] = useState(car.price);
    const [personId, setPersonId] = useState(car.personId);
    const [updateCar] = useMutation(UPDATE_CAR);
    const [form] = Form.useForm();
    const [, forceUpdate] = useState();

    useEffect(() => {
        forceUpdate({});
    }
    , []);

    const onFinish = (values) => {
        const { year, make, model, price, personId } = values;
        updateCar({
            variables: { id, year, make, model, price, personId },
        });
        form.resetFields();
        setEditMode(false);
    }

    const onReset = (data, value) => {
        updateCarDetail(data, value);
        switch(data) {
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
    }

    return (
        <>
        <Form
            form={form}
            name="updateCar"
            onFinish={onFinish}
            initialValues={{ year, make, model, price, personId }}
        >
            <Form.Item

                name="year"
                label="Year"
                rules={[{ required: true, message: 'Please input the year!' }]}
            >
                <InputNumber placeholder="Year" 
                value= {year}
                onChange={value => onReset('year', value)}/>
            </Form.Item>
            <Form.Item
                name="make"
                label="Make"
                rules={[{ required: true, message: 'Please input the make!' }]}
            >
                <InputNumber placeholder="Make" 
                value={make}
                onChange={value => onReset('make', value)}/>
            </Form.Item>
            <Form.Item
                name="model"
                label="Model"
                rules={[{ required: true, message: 'Please input the model!' }]}
            >
                <InputNumber placeholder="Model"
                value={model}
                onChange={value => onReset('model', value)}/>
            </Form.Item>
            <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true, message: 'Please input the price!' }]}
            >
                <InputNumber placeholder="Price"
                value={price}
                formatter={currencies}
                parser={Currency}
                onChange={value => onReset('price', value)}/>
            </Form.Item>
            <Form.Item
                name="personId"
                label="Person"
                rules={[{ required: true, message: 'Please input the person!' }]}
            >
                <Select placeholder="Person">
                    <Select.Option value="1">John Doe</Select.Option>
                    <Select.Option value="2">Jane Doe</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"
                disabled={
                   (!form.isFieldTouched('year') &&
                     !form.isFieldTouched('make') &&
                        !form.isFieldTouched('model') &&
                        !form.isFieldTouched('price') &&
                        !form.isFieldTouched('personId')) || form.getFieldError().filter(({errors}) => errors.length).length
                }
                >
                    Update Car
                </Button>
            </Form.Item>
            <Button onClick={() => setEditMode(false)}>Cancel</Button>
        </Form>


        </>
    )
}

export default UpdateCar;