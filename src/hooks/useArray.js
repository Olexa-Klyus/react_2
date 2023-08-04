import {useState} from "react";

export function useArray(defaultValue) {
    const [data, setData] = useState(Array.isArray(defaultValue) ? defaultValue : []);

    const add = (item) => {
        setData(prev => [...prev, item])
    }
    const remove = (id) => {
        setData(prev => {
            const index = prev.findIndex(item => item.id === id);
            prev.splice(index, 1);
            return [...prev];
        })
    }

    return {data, add, remove};
}
