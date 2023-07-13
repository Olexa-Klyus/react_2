import {useState} from "react";

const CreateUser = () => {

    const HandleSubmit = (event) => {
        event.preventDefault();
    }

    const HandleFormChange = (event, key) => {
        event.preventDefault();

        setFormValues((prevState) => {
            return {
                ...prevState,
                [key]: event.target.value
            }
        });
    }

    const [formValues, setFormValues] = useState({
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: "",
            },
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: "",
        },

    })


    fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: formValues.name,
                username: formValues.username,
                email: formValues.email,
                address: {
                    street: formValues.address.street,
                    suite: formValues.address.suite,
                    city: formValues.address.city,
                    zipcode: formValues.address.zipcode,
                    geo: {
                        lat: formValues.address.geo.lat,
                        lng: formValues.address.geo.lng
                    }
                },
                phone: formValues.phone,
                website: formValues.website,
                company: {
                    name: formValues.company.name,
                    catchPhrase: formValues.company.catchPhrase,
                    bs: formValues.company.bs
                }
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }
    )
        .then(res => res.json())
        .then(res => res)

    return (
        <div>
            <form onSubmit={HandleSubmit}>

                <label> name
                    <input type="text" value={formValues.name} onChange={(event) => HandleFormChange(event, "name")}/>
                </label>
                <label> username
                    <input type="text" value={formValues.username}
                           onChange={(event) => HandleFormChange(event, "username")}/>
                </label>
                <label> email
                    <input type="text" value={formValues.email} onChange={(event) => HandleFormChange(event, "email")}/>
                </label>
                address
                <label> street
                    <input type="text" value={formValues.address.street}
                           onChange={(event) => HandleFormChange(event, "street")}/>
                </label>
                <label> suite
                    <input type="text" value={formValues.address.suite}
                           onChange={(event) => HandleFormChange(event, "suite")}/>
                </label>
                <label> city
                    <input type="text" value={formValues.address.city}
                           onChange={(event) => HandleFormChange(event, "city")}/>
                </label>
                <label> zipcode
                    <input type="text" value={formValues.address.zipcode}
                           onChange={(event) => HandleFormChange(event, "zipcode")}/>
                </label>
                geo
                <label> lat
                    <input type="text" value={formValues.address.geo.lat}
                           onChange={(event) => HandleFormChange(event, "lat")}/>
                </label>
                <label> lng
                    <input type="text" value={formValues.address.geo.lng}
                           onChange={(event) => HandleFormChange(event, "lng")}/>
                </label>
                <label> phone
                    <input type="text" value={formValues.phone} onChange={(event) => HandleFormChange(event, "phone")}/>
                </label>
                <label> website
                    <input type="text" value={formValues.website}
                           onChange={(event) => HandleFormChange(event, "website")}/>
                </label>
                company
                <label> name
                    <input type="text" value={formValues.company.name}
                           onChange={(event) => HandleFormChange(event, "name")}/>
                </label>
                <label> catchPhrase
                    <input type="text" value={formValues.company.catchPhrase}
                           onChange={(event) => HandleFormChange(event, "catchPhrase")}/>
                </label>
                <label> bs
                    <input type="text" value={formValues.company.bs}
                           onChange={(event) => HandleFormChange(event, "bs")}/>
                </label>

                <button type="submit">Ok</button>

            </form>
        </div>
    );
};

export default CreateUser;