import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [])


    return (
        <div>
            {users.map((user) => <User user={user} key={user.id} setUserId={setUserId}/>)}
        </div>
    );
};

export default Users;