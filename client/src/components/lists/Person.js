import { useQuery } from '@apollo/client';
import { GET_PEOPLE } from '../../queries';
import { List } from 'antd';
import Person from '../listitems/Person';

const People = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE, {
    fetchPolicy: 'cache-and-network',
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <List
      dataSource={data.people}
      renderItem={(person) => (
        <List.Item key={person.id}>
          <Person person={person} people={data.people} />
        </List.Item>
      )}
    />
  );
};

export default People;
