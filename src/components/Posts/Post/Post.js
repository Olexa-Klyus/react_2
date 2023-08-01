import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const Post = () => {
    const [post, setPost] = useState({});

    const {postId} = useParams();
    // console.log(postId)

    useEffect(() => {
        if (postId < 1 || postId > 100) {
            throw Error
        }
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(value => value.json())
            .then(post => setPost(post))
            // .catch((e) => (<div>"Sorry, such post doesn't exist"</div>))

    }, [postId])


    return (
        <div> Post
            <div>userId: {post.userId}</div>
            <div>post id: {postId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <hr/>
        </div>
    );
};

export default Post;