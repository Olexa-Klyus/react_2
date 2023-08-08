import React, {useEffect} from 'react';
import {userActions} from "../../reduxCore/actions/userActions";
import {useDispatch, useSelector} from "react-redux";

const Lesson9 = () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.users.results);  // витягаємо users зі store
    const isLoading = useSelector(store => store.users.isLoading)

    useEffect(() => {
        dispatch(userActions.setIsLoading(true)); // поки нема юзерів, буде "Loading..."

        fetch("https://rickandmortyapi.com/api/character")
            .then(res => res.json())
            .then(data => dispatch(userActions.setUsers(data)))
            .catch(error => dispatch(userActions.setError(error)))
    }, []);


    return (<div>
            {isLoading
                ? <h1>Loading...</h1>
                : <>
                    {users.map(user => (
                        <div>
                            <p>{user.name}</p>
                            <img src={user.image} alt="" style={{width: 100, height: 100}}/>
                        </div>
                    ))}
                </>
            }
        </div>
    );
};

export default Lesson9;