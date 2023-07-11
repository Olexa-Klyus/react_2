import UsersComponent from "./components/UsersComponent/UsersComponent";
import {useState} from "react";
import Posts from "./components/UsersComponent/Posts/Posts";

const App = () => {
  const [userId, setUserId] = useState(null)


  return (
      <div>
        <UsersComponent setUserId={setUserId}/>
        {userId&&<Posts userId={userId}/>}
      </div>
  );
}

export default App;
