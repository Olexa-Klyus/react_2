import {useForm} from "react-hook-form";
import React from "react";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm();

    const save = (user) => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {'Content-type': 'application/json'},
            method: "POST",
            body: JSON.stringify(user)
        })
            .then(value => value.json())
            .then(value => {
                setUsers(prev => [...prev, value])
                reset()
            })
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name:<input type="text" placeholder={"name"} {...register("name")}/></label>
            <label>username:<input type="text" placeholder={"username"} {...register("username")}/></label>
            <label>email:<input type="text" placeholder={"email"} {...register("email")}/></label><br/>
            <label>city:<input type="text" placeholder={"city"} {...register("address.city")}/></label>

            <label>street:<input type="text" placeholder={"street"} {...register("address.street")}/></label><br/>
            <label>suite:<input type="text" placeholder={"suite"} {...register("address.suite")}/></label>
            <label>zipcode:<input type="text" placeholder={"zipcode"} {...register("address.zipcode")}/></label><br/>

            <label>geo lat:<input type="text" placeholder={"lat"} {...register("address.geo.lat")}/></label>
            <label>geo lng:<input type="text" placeholder={"lng"} {...register("address.geo.lng")}/></label><br/>

            <label>phone:<input type="text" placeholder={"phone"} {...register("phone")}/></label>
            <label>website:<input type="text" placeholder={"website"} {...register("website")}/></label><br/>

            <label>company name:<input type="text" placeholder={"company name"} {...register("company.name")}/></label>
            <label>catchPhrase:<input type="text" placeholder={"company catchPhrase"} {...register("company.catchPhrase")}/></label>
            <label>bs:<input type="text" placeholder={"company bs"} {...register("company.bs")}/></label><br/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;