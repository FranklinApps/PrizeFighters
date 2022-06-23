
import React, {useState} from "react";
import UserList from '../components/users/UserList';

const Main =(props) => {
    const [user, setUser] = useState([]);

    
return (
    <div>
        <h1>Users</h1> 
        
        <UserList user={user} setUser={setUser}/>

    </div>
)}
export default Main;