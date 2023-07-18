const User = ({user}) => {
    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {cName, catchPhrase, bs}

        // id:id,
        // name:name,
        // username:username,
        // email:email,
        // address: {street:address_street, suite:address_suite, city:address_city, zipcode:address_zipcode, geo: {lat:address_geo_lat, lng:address_geo_lng}},
        // phone:phone,
        // website:website,
        // company: {name:company_name, catchPhrase:company_catchPhrase, bs:company_bs}
    } = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>city: {city}</div>

            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>zipcode: {zipcode}</div>

            <div>geo lat: {lat}</div>
            <div>geo lng: {lng}</div>

            <div>phone: {phone}</div>
            <div>website: {website}</div>

            <div>company name: {cName}</div>
            <div>catchPhrase: {catchPhrase}</div>
            <div>bs: {bs}</div>
            <hr/>
        </div>
    );
};

export default User;