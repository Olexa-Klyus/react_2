import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {getCars} from "../reduxCore/actions/carActions";

export const useGetCars = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCars())
    }, []);
}