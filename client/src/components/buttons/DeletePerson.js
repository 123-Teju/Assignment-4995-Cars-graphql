import { DeleteOutlined } from '@ant-design/icons'
import { useMutation } from '@apollo/client'
import {GET_PEOPLE, DELETE_PERSON } from '../../queries'
import filter from 'lodash'

const DeletePerson = ({ id }) => {
    const [deletePerson] = useMutation(DELETE_PERSON, {
        update(cache, { data: { deletePerson } }) {
        const { contacts } = cache.readQuery({ query:GET_PEOPLE })
        cache.writeQuery({
            query:GET_PEOPLE,
            data: { contacts: filter(contacts, (contact) => contact.id !== deletePerson.id) },
        })
        },
    })

    const handleDeletePerson = () => {
        let result = window.confirm('Are you sure you want to delete this person details?')
        if (result) {
            deletePerson({ variables: { id } });
        }
    };
    
    return (
        <DeleteOutlined
        key='delete'
        onClick={handleDeletePerson}
        style={{ color: 'red' }}
        />
    )
    }

export default DeletePerson