import {AppRoutes} from "../../../Routing/AppRoutes";
import {Link} from "react-router-dom";
import Post from "../../Post/Post";
import React from "react";

const Comment = ({comment}) => {
    const {postId, name, email, body} = comment;
    return (
        <div>
            <div>
                <Link to={`${AppRoutes.POSTS}/${postId}}`}>
                postId: {postId}
                </Link>
            </div>
            <div>id: {comment.id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <div>***</div>
            {<Post postId={comment.postId}/>}
        </div>
    );
};

export default Comment;