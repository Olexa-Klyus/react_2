import React from 'react';

const Users = ({user}) => {
    const {
        id,
        name,
        username,
        email,
    } = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <br/>
        </div>
    );
};

export default Users;