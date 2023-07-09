import './App.css';
import Users from "./components/Users/Users";
import {useState} from "react";
import Posts from "./components/Users/Posts/Posts";

const App = () => {
    const [userId, setUserId] = useState(null)


    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId&&<Posts userId={userId}/>}
        </div>
    );
}

export default App;
