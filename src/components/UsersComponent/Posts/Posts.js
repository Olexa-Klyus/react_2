import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts((value)))
    }, [userId])  // коли змінюється userId, useEffect буде працювати

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;