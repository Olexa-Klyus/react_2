import React, {memo, useCallback, useMemo} from 'react';

import {useToggle} from "../../hooks/useToggle";
import {useFetch} from "../../hooks/useFetch";
import Users from "../ToBeFetched/Users";
import {useArray} from "../../hooks/useArray";

export const TestUseMemo = ({data}) => {
    const {number} = data;

    const someFunction = (number) => {
        for (let i = 1; i < 1000000; i++) {
            number += 1;
        }
        return number;
    }

    // 1,2
    const someRes = useMemo(() => someFunction(number), [data])
    const someResFunc = memo(useCallback(() => someFunction(number), [data]))

    // 3
    let compStatus = (someRes % 2) ? true : false;

    compStatus = useToggle(compStatus);
    compStatus = useToggle(compStatus);
    console.log(compStatus)

    // 4
    const endpoint_users = "users";
    // const endpoint_posts = "posts";
    // const endpoint_comments = "comments";

    let users = useFetch(endpoint_users)
    console.log(users);
    // let posts = useFetch(endpoint_posts)
    // console.log(posts);
    // let comments = useFetch(endpoint_comments)
    // console.log(comments);

    // 5
    users = useArray(users, "+", {name: "Olena", username: "Olena", email: "Olena@gmail.com"})
    users = useArray(users, "-", 3)
    users = useArray(users, "-", 1)


    return (
        <div>
            <br/>
            1. TestUseMemo -- useMemo -- result: <b>{someRes}</b>
            <br/><br/>
            2. TestUseMemo -- useCallback -- result: <b>{typeof someResFunc}</b>
            <br/><br/>
            3. component status: <b>{compStatus.toString()}</b>
            <br/><br/>
            4. Users: {users.map(user => <Users key={user.id} user={user}/>)}
        </div>
    );
};