import {useState} from "react";

export const useToggle = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const changeStatus = () => {
        setValue(prev => !prev)
    }
    return {value, changeStatus}
}