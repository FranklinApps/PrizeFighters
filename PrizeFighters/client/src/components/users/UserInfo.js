import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserInfo = (props) => {
    const {id}= useParams();
    const [oneUser, setOneUser] = useState({});
    const navigate = useNavigate();

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/user/${id}`)
        .then((res) => {
            console.log(res.data);
            setOneUser(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
        
    }, [id]);
    
    const deleteHandler = () =>{
        axios.delete(`http://localhost:8000/api/user/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <div className="UserInfo-component">
            <h2>Welcome, {oneUser.firstName} {oneUser.lastName} </h2>
            <p>Email: {oneUser.email}</p> 
            <button onClick={deleteHandler}>Delete {oneUser.firstName} {oneUser.lastName}</button>
        </div>
    )

}

export default UserInfo;