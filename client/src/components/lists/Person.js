import { List } from 'antd';
import { GET_PEOPLE } from '../../queries';
import { useQuery } from '@apollo/client';
import Person from '../listitems/Person';
import { useEffect } from 'react';

const People = () => {
  const { data } = useQuery(GET_PEOPLE);
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <List
      dataSource={data.Cars}
      renderItem={(person) => (
        <List.Item key={person.id}>
          <Person person={person} people={data.people} />
        </List.Item>
      )}
    />
  );
};

export default People;
