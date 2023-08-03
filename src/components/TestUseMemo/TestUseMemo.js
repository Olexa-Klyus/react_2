import React, {useMemo} from 'react';

import {useFetch} from "../../hooks/useFetch";
import Users from "../ToBeFetched/Users";
import {useArray} from "../../hooks/useArray";

// 1
export const TestUseMemo = ({number}) => {
    const someFunction = (number) => {
        let res = 0;
        for (let i = 1; i < 1000000000; i++) {
            res += number;
        }
        return res;
    }

    const someRes = useMemo(() => someFunction(number), [number]);

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
            <button onClick={() => console.log("click")}>log click</button>
            <br/><hr/>
            4. Users: {users.map(user => <Users key={user.id} user={user}/>)}
        </div>
    );
};