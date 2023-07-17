import React from 'react';

const User = ({user}) => {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name:companyName, catchPhrase, bs}
    } = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {city}</div>

            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>

            <div>geo lat: {lat}</div>
            <div>geo lng: {lng}</div>

            <div>phone: {phone}</div>
            <div>website: {website}</div>

            <div>company name: {companyName}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
            <hr/>
        </div>
    );
};

export default User;