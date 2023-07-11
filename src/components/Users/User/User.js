import {UserAddress} from "./UserAddress/UserAddress";
import {UserDetails} from "./UserDetails/UserDetails";
import {UserCompany} from "./UserCompany/UserCompany";

export const User = ({user}) => {
    return (
        <>
            <hr/>
            <h2><b>User</b></h2>
            <UserDetails user={user} key={user.id}/>
            <UserAddress address={user.address} key={user.id}/>
            <UserCompany company={user.company} key={user.id}/>
        </>)
}