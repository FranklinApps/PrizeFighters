import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom";

const UserUpdate = (props) => {
    const {id} = useParams;
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);


    useEffect (()=>{
        console.log('please', id)
        axios
            .get(`http://localhost:8000/api/user/${id}`)
            .then(res => {
                setFirstName(res.data.firstName);
                setLastName(res.data.lastName);
                setEmail(res.data.email);
                setPassword(res.data.password);

            })
            .catch(err => console.log(err))
    }, [id])

    const updateUser = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${id}`,{firstName, lastName, email, password})
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
            .catch((err)=>{
                const errorResponse = err.response.data.errors;
                const errArr = [];
                for (const key of Object.keys(errorResponse)){
                    err.Arr.push(errorResponse[key].message)
                }
                setErrors(errArr);
            })
    }
    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/user/${id}`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err)=>{
                console.log(err);
            })
    };

    return (
        <div>
            <h1>Update {firstName} {lastName}</h1>
            {errors.map((error, index) => {
                return (<p key={index}>{error}</p>)
            })}
            <form onSubmit={updateUser}>
                <p>
                    <label>First Name: </label><br/>
                    <input type="text"
                    name="firstName"
                    value={firstName}
                    placeholder="First Name"
                    onChange={(e)=>{setFirstName(e.target.value)}}/>
                </p>

                <p>
                    <label>Last Name: </label><br/>
                    <input type="text"
                    name="lastName"
                    value={lastName}
                    placeholder="Last Name"
                    onChange={(e)=>{setLastName(e.target.value)}}/>
                </p>

                <p>
                    <label>Email: </label><br/>
                    <input type="text"
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e)=>{setEmail(e.target.value)}}/>
                </p>

                <p>
                    <label>Password: </label><br/>
                    <input type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <p>
                    <label>Delete User</label>
                    <br/>
                    <button onClick={deleteHandler}> Remove {firstName} from Website </button>
                </p>
                <input type="submit"/>
            </form>

        </div>
    )
}

export default UserUpdate;