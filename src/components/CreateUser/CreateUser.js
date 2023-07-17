import {useState} from "react";

const CreateUser = () => {

        const HandleSubmit = (event) => {
            event.preventDefault();
            fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    body: JSON.stringify(formValues),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            )
                .then(res => res.json())
                .then((res) => {
                    console.log(res)
                    setFormValues(prev => !prev)
                    setFormValues(initialState)
                })

            // postUser().then(res => console.log(res));
        }

        const HandleFormChange = (event, key) => {
            // event.preventDefault();

            setFormValues((prevState) => {
                return {
                    ...prevState,
                    [key]: event.target.value
                }
            });
            console.log(event.target.value)
        }

        const initialState = {
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
                companyName: "",
                catchPhrase: "",
                bs: "",
            }
        }

        const [formValues, setFormValues] = useState(initialState)


        return (
            <div>
                <form onSubmit={HandleSubmit}>

                    <label> name
                        <input type="text" value={formValues.name} onChange={(event) => HandleFormChange(event, "name")}/>
                    </label><br/>
                    <label> username
                        <input type="text" value={formValues.username}
                               onChange={(event) => HandleFormChange(event, "username")}/>
                    </label><br/>
                    <label> email
                        <input type="text" value={formValues.email} onChange={(event) => HandleFormChange(event, "email")}/>
                    </label><br/>
                    address<br/>
                    <label> street
                        <input type="text" value={formValues.street}
                               onChange={(event) => HandleFormChange(event, "street")}/>
                    </label><br/>
                    <label> suite
                        <input type="text" value={formValues.suite}
                               onChange={(event) => HandleFormChange(event, "suite")}/>
                    </label><br/>
                    <label> city
                        <input type="text" value={formValues.city}
                               onChange={(event) => HandleFormChange(event, "city")}/>
                    </label><br/>
                    <label> zipcode
                        <input type="text" value={formValues.zipcode}
                               onChange={(event) => HandleFormChange(event, "zipcode")}/>
                    </label><br/>
                    geo<br/>
                    <label> lat
                        <input type="text" value={formValues.lat}
                               onChange={(event) => HandleFormChange(event, "lat")}/>
                    </label><br/>
                    <label> lng
                        <input type="text" value={formValues.lng}
                               onChange={(event) => HandleFormChange(event, "lng")}/>
                    </label><br/>
                    <label> phone
                        <input type="text" value={formValues.phone} onChange={(event) => HandleFormChange(event, "phone")}/>
                    </label><br/>
                    <label> website
                        <input type="text" value={formValues.website}
                               onChange={(event) => HandleFormChange(event, "website")}/>
                    </label><br/>
                    company
                    <label> name
                        <input type="text" value={formValues.companyName}
                               onChange={(event) => HandleFormChange(event, "companyName")}/>
                    </label><br/>
                    <label> catchPhrase
                        <input type="text" value={formValues.catchPhrase}
                               onChange={(event) => HandleFormChange(event, "catchPhrase")}/>
                    </label><br/>
                    <label> bs
                        <input type="text" value={formValues.bs}
                               onChange={(event) => HandleFormChange(event, "bs")}/>
                    </label><br/>

                    <button type="submit">Ok</button>
                    <br/>
                    {JSON.stringify(formValues)}

                </form>
            </div>
        );
    }
;

export default CreateUser;


// prev
//     const postUser = async () => {
//
//         await fetch("https://jsonplaceholder.typicode.com/users", {
//                 method: "POST",
//                 body: JSON.stringify(
//                     {
//                         name: formValues.name,
//                         username: formValues.username,
//                         email: formValues.email,
//                         address: {
//                             street: formValues.street,
//                             suite: formValues.suite,
//                             city: formValues.city,
//                             zipcode: formValues.zipcode,
//                             geo: {
//                                 lat: formValues.lat,
//                                 lng: formValues.lng
//                             }
//                         },
//                         phone: formValues.phone,
//                         website: formValues.website,
//                         company: {
//                             name: formValues.companyName,
//                             catchPhrase: formValues.catchPhrase,
//                             bs: formValues.bs
//                         }
//                     }),
//                 headers: {
//                     'Content-type': 'application/json; charset=UTF-8',
//                 },
//             }
//         )
//             .then(res => res.json())
//             .then((json) => console.log(json))
//     }
// }