export const UserAddress = ({address}) => {
    const {street, suite, city} = address;

    return (
        <div><b>Address</b>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
        </div>
    );
}