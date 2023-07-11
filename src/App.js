import './App.css';
import {useEffect, useState} from "react";
import {Users} from "./components/Users/Users";

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(users => setUsers(users))
    }, [])

  return (
    <div>
        {users.map((user) => <Users user={user} key={user.id}/>)}
    </div>
  );
}

export default App;
