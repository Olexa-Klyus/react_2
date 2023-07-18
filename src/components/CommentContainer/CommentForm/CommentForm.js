import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../../validators/commentValidator";

const CommentForm = ({setComments}) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode:"all",
        resolver: joiResolver(commentValidator)
    });

    const save = (comment) => {
        fetch("https://jsonplaceholder.typicode.com/comments", {
            headers: {'Content-type': 'application/json'},
            method: "POST",
            body: JSON.stringify(comment)
        })
            .then(value => value.json())
            .then(value => {
                setComments(prev => [...prev, value])
                reset()
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>postId:<input type="number" placeholder={"postId"} {...register("postId")}/></label>
            {errors.postId && <span>{errors.postId.message}</span>}<br/>

            <label>name:<input type="text" placeholder={"name"} {...register("name")}/></label>
            {errors.name && <span>{errors.name.message}</span>}<br/>

            <label>Email:<input type="email" placeholder={"email"} {...register("email")}/></label>
            {errors.email && <span>{errors.email.message}</span>}<br/>

            <label>your comment:<input type="text" placeholder={"type here"} {...register("body")}/></label>
            {errors.body && <span>{errors.body.message}</span>}<br/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;