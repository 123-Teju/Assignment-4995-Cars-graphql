import { List } from "antd"
import { GET_PERSON } from "../../queries";
import { useQuery } from "@apollo/client";
import Person from "../listitems/Person";

const People = () => {
    
        const { data } = useQuery(GET_PERSON);
    
        return(
            <List
            dataSource={data.Cars}
            renderItem={person => (
                <List.Item key={person.id}>
                <Person person={person}
                people={data.people} />
                </List.Item>
            )}
            />
        )
    }

export default People;