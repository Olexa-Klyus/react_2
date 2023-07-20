import React from 'react';

const Album = ({album}) => {
    const {userId, title} = album;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {album.id}</div>
            <div>title: {title}</div>
            <div>***</div>
        </div>
    );
};
export default Album;