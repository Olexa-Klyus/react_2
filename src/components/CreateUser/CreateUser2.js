import {useRef} from "react";

export const CreateUser2 = () => {
    const name = useRef();
    const username = useRef();
    const email = useRef();
    const street = useRef();
    const suite = useRef();
    const city = useRef();
    const zipcode = useRef();
    const lat = useRef();
    const lng = useRef();
    const phone = useRef();
    const website = useRef();
    const company = useRef();
    const catchPhrase = useRef();
    const bs = useRef();

    const submit = (e) => {
        e.preventDefault()
        const name = name.current.value
        const username = username.current.value
        const email = email.current.value
        const user = {
            name,
            username,
            email,
            address: {
                street,
                suite,
                city,
                zipcode,
                geo: {
                    lat,
                    lng
                }
            },
            phone,
            website,
            company: {
                name,
                catchPhrase,
                bs
            }
        }
        console.log(user)
    }

    return (
        <form onSubmit={submit}>
            <label> name <input type="text" ref={name}/></label>
            <label> username <input type="text" ref={username}/></label>
            <label> email <input type="text" ref={email}/></label>
            <label> street <input type="text" ref={street}/></label>
            <label> suite <input type="text" ref={suite}/></label>
            <label> city <input type="text" ref={city}/></label>
            <label> zipcode <input type="text" ref={zipcode}/></label>
            <label> lat <input type="text" ref={lat}/></label>
            <label> lng <input type="text" ref={lng}/></label>
            <label> phone <input type="text" ref={phone}/></label>
            <label> website <input type="text" ref={website}/></label>
            <label> company name <input type="text" ref={company}/></label>
            <label> catchPhrase <input type="text" ref={catchPhrase}/></label>
            <label> bs <input type="text" ref={bs}/></label>
            <button>save</button>
        </form>
    )
}