import React, {useContext, useEffect, useState} from 'react';

const Post = ({postId}) => {
    const [post, setPostId] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then(post => (post))
    }, [post])

    return (
        <div>
            <div>{post}</div>
        </div>
    );
};

export default Post;