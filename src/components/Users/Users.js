import {User} from "./User/User";

export const Users = ({user}) => {

    return (
        <div>
            {<User user={user} key={user.id}/>}
        </div>
    )
};