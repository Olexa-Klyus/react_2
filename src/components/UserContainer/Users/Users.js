import React, {useEffect} from 'react';
import User from "../User/User";

const Users = ({setUsers, users}) => {
    useEffect(()=> {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => setUsers(value))

    }, [])

    return (
        <div>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;