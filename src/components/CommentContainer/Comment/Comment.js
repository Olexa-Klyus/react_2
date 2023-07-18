import React from 'react';

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;
    return (
        <div>
            <div>postId: {postId}</div>
            <br/>
            <div>comment id: {comment.id}</div>
            <br/>
            <div>name: {name}</div>
            <br/>
            <div>email: {email}</div>
            <br/>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default Comment;