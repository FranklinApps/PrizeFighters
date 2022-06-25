import React from "react";
import UpdateGame from '../components/games/UpdateGame';
import { useParams } from "react-router-dom";

const Main =(props) => {

    const {id} = useParams;
return (
    <div>
        
        <UpdateGame id={id}/>
            

    </div>
)}
export default Main;