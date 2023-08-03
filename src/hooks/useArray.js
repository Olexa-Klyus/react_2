// import {useState} from "react";

export function useArray(defaultValue, sign, item) {

    const add = (item) => {
        defaultValue.push(item)
        return defaultValue;
    }
    const remove = (id) => {
        defaultValue = defaultValue.filter((item) => item.id !== id);
    }
    if (sign === "+") {
        add(item);
    }
    if (sign === "-") {
        remove(item);
    } else {}

    return defaultValue;
}
