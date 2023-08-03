// import {useState} from "react";

export function useArray(defaultValue, sign, item) {
    // const [value, setValue] = useState(null);

    const add = (item) => {
        defaultValue.push(item)
        return defaultValue;
    }
    const remove = (id) => {
        defaultValue = defaultValue.filter((item) => item.id !== id);
        // setValue(defaultValue);
        // defaultValue.splice(item, 1);
    }
    if (sign === "+") {
        add(item);
    }
    if (sign === "-") {
        remove(item);
    }
    return defaultValue;
}