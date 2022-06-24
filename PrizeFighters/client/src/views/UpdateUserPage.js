import React from "react";
import UpdateUser from '../components/users/UpdateUser';
import { useParams } from "react-router-dom";

const Main =(props) => {

    const {id} = useParams;
return (
    <div>
        
        <UpdateUser id={id}/>
            

    </div>
)}
export default Main;