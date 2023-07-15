import {User} from "./User/User";

export const Users = ({users}) => {

    return (
        <div>
            {users.map((user) => <User user={user} key={user.id}/>)}
        </div>
    )
};