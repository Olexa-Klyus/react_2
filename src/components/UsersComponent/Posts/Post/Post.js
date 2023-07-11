import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <p>body: {body}</p>
        </div>
    );
};

export default Post;