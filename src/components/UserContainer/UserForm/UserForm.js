import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../../validators/userValidator";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const save = (user) => {
        const userUpd = {};
        userUpd.id = user.id
        userUpd.name = user.name
        userUpd.username = user.username
        userUpd.email = user.email

        userUpd.address.street = user.address_street
        userUpd.address.suite = user.address_suite
        userUpd.address.city = user.address_city
        userUpd.address.zipcode = user.address_zipcode

        userUpd.address.geo.lat = user.address_geo_lat
        userUpd.address.geo.lng = user.address_geo_lng

        userUpd.phone = user.phone
        userUpd.website = user.website

        userUpd.company.name = user.company_name
        userUpd.company.catchPhrase = user.company_catchPhrase
        userUpd.company.bs = user.company_bs

        fetch("https://jsonplaceholder.typicode.com/users", {
            headers: {'Content-type': 'application/json'},
            method: "POST",
            body: JSON.stringify(userUpd)
        })
            .then(value => value.json())
            .then(value => {
                setUsers(prev => [...prev, value])
                reset()
            })
            .catch(e => {
                console.log(e)
            })
    }
    return (
        <form onSubmit={handleSubmit(save)}>
            <label>name:<input type="text" placeholder={"name"} {...register("name")}/></label>
            {errors.name && <span>{errors.name.message}</span>}<br/>

            <label>username:<input type="text" placeholder={"username"} {...register("username")}/></label>
            {errors.username && <span>{errors.username.message}</span>}<br/>

            <label>email:<input type="text" placeholder={"email"} {...register("email")}/></label>
            {errors.email && <span>{errors.email.message}</span>}<br/><br/>


            <label>Address<br/>city:<input type="text" placeholder={"city"} {...register("address_city")}/></label>
            {errors.address_city && <span>{errors.address_city.message}</span>}<br/>

            <label>street:<input type="text" placeholder={"street"} {...register("address_street")}/></label>
            {errors.address_street && <span>{errors.address_street.message}</span>}<br/>

            <label>suite:<input type="text" placeholder={"suite"} {...register("address_suite")}/></label>
            {errors.address_suite && <span>{errors.address_suite.message}</span>}<br/>

            <label>zipcode:<input type="text" placeholder={"address_zipcode"} {...register("address_zipcode")}/></label>
            {errors.address_zipcode && <span>{errors.address_zipcode.message}</span>}<br/>

            <label>geo lat:<input type="text" placeholder={"lat"} {...register("address_geo_lat")}/></label>
            {errors.address_geo_lat && <span>{errors.address_geo_lat.message}</span>}<br/>

            <label>geo lng:<input type="text" placeholder={"lng"} {...register("address_geo_lng")}/></label><br/>
            {errors.address_geo_lng && <span>{errors.address_geo_lng.message}</span>}<br/>


            <label>phone:<input type="text" placeholder={"phone"} {...register("phone")}/></label>
            {errors.phone && <span>{errors.phone.message}</span>}<br/>

            <label>website:<input type="text" placeholder={"website"} {...register("website")}/></label>
            {errors.website && <span>{errors.website.message}</span>}<br/><br/>

            <label>Company<br/>name:<input type="text"
                                           placeholder={"company name"} {...register("company_name")}/></label>
            {errors.company_name && <span>{errors.company_name.message}</span>}<br/>

            <label>catchPhrase:<input type="text"
                                      placeholder={"company catchPhrase"} {...register("company_catchPhrase")}/></label>
            {errors.company_catchPhrase && <span>{errors.company_catchPhrase.message}</span>}<br/>

            <label>bs:<input type="text" placeholder={"company bs"} {...register("company_bs")}/></label>
            {errors.company_bs && <span>{errors.company_bs.message}</span>}<br/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;