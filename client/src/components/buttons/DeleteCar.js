import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import { GET_CARS, REMOVE_CAR } from '../../queries'
import filter from 'lodash'

const DeleteCar = ({ id }) => {
    const [removeCar] = useMutation(REMOVE_CAR, {
        update(cache, { data: { removeCar } }) {
        const { cars } = cache.readQuery({ query: GET_CARS })
        cache.writeQuery({
            query: GET_CARS,
            data: { cars: filter(cars, (car) => car.id !== removeCar.id) },
        })
        },
    })

    const handleDeleteCar = () => {
        let result = window.confirm('Are you sure you want to delete this car details?')
        if (result) {
            removeCar({ variables: { id } });
        }
    };
    
    return (
        <DeleteOutlined
        key='delete'
        onClick={handleDeleteCar}
        style={{ color: 'red' }}
        />
    )
    }

export default DeleteCar