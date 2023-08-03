import {useEffect, useState} from "react"

export function useFetch(endpoint) {
    const [value, setValue] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/" + endpoint)
            .then(res => res.json())
            .then(data => setValue(data))
    },[])
    return value;
}