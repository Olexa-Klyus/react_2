import React from 'react';

const Todo = ({todo}) => {
    const {userId, title, completed} = todo;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {todo.id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <div>***</div>
        </div>
    );
};

export default Todo;