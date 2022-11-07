import DeletePerson from '../buttons/DeletePerson';
import Cars from '../lists/Cars';
import UpdatePerson from '../forms/UpdatePerson';
import { useEffect, useState } from 'react';
import { EditOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const Person = ({ person, people }) => {
  const [id] = useState(person.id);
  const [firstName, setFirstName] = useState(person.firstName);
  const [lastName, setLastName] = useState(person.lastName);
  const [editMode, setEditMode] = useState(false);

  const onReset = (data, value) => {
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

  return editMode ? (
    <Card key={person.id}>
      <UpdatePerson
        person={person}
        setEditMode={setEditMode}
        updateCarDetail={onReset}
      />
      <Cars personId={id} people={people} />
      <Link to={`/people/${id}`}>Learn More</Link>
    </Card>
  ) : (
    <Card
      actions={[
        <EditOutlined key="edit" onClick={() => setEditMode(!editMode)} />,
        <DeletePerson id={id} />,
      ]}
      title={`${person.firstName} ${person.lastName}`}
      key={person.id}
    >
      <Cars personId={id} people={people} />
      <Link to={`/person/${id}`}>More</Link>
    </Card>
  );
};

export default Person;
