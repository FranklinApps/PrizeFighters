import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const UserList = (props) => {
    const {user, setUser} = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/user')
        .then((res) => {
            console.log(res.data);
            setUser(res.data)
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [setUser]);
    const deleteUser= (idDel) => {
        axios.delete(`http://localhost:8000/api/user/${idDel}`)
        .then(res => {
            console.log(res.data);
            const newList = user.filter((users, index)=> users._id !== idDel)
            setUser(newList);
        })
        .catch(err => console.log(err.data));
    }

    return (
        <div>
             {
                user.map((users, index)=> {
                    return(
                        <div className='inner'key={index}> <p key={index}> 
                        First Name: {users.firstName} <br/>
                        Last Name: {users.lastName} <br/>
                        Email: {users.email}</p>

                            <Link to={`/User/${users._id}`}> <button>More Info on {users.firstName} </button></Link><br/><br/>
                            <Link to={'/User/edit/' + users._id}> <button>Edit   {users.lastName}</button>  </Link><br/><br/>
                            <button onClick={()=> deleteUser(users._id)}> Delete </button>
                        </div>

                )})

            }
            <br/>
            <a href='/'><button>Go Home</button></a>
        </div>
    )
}
    export default UserList;