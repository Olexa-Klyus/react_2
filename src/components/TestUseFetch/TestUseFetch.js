import React from 'react';

import {useFetch} from "../../hooks/useFetch";
import Users from "./Users/Users";

// 4
const TestUseFetch = () => {

    const endpoint_users = "users";
    const endpoint_posts = "posts";
    const endpoint_comments = "comments";

    let users = useFetch(endpoint_users)

    return (
        <div>
            4. Users: {users.map(user => <Users key={user.id} user={user}/>)}
            <br/><hr/>
        </div>
    );
};

export default TestUseFetch;