import React, {useEffect, useState} from "react";
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom";

const UpdateGame = (props) => {
    const {id} = useParams();
    const [gameTitle, setGameTitle] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [station, setStation] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();


    useEffect (()=>{
        console.log('please', id)
        axios
            .get(`http://localhost:8000/api/game/${id}`)
            .then(res => {
                setGameTitle(res.data.gameTitle);
                setReleaseDate(res.data.ReleaseDate);
                setStation(res.data.station);
                
            })
            .catch(err => console.log(err))
    }, [id])

    const updateGame = (e)=>{
        e.preventDefault();
        console.log(id)
        axios.put(`http://localhost:8000/api/game/${id}`,{gameTitle, releaseDate, station})
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
        axios.delete(`http://localhost:8000/api/game/${id}`)
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
            <h1>Update {gameTitle} </h1>
            {errors.map((error, index) => {
                return (<p key={index}>{error}</p>)
            })}
            <form onSubmit={updateGame} className='formlist'>
                <p>
                    <label>Game Title: </label><br/>
                    <input type="text"
                    name="gameTitle"
                    value={gameTitle}
                    placeholder="Game Title"
                    onChange={(e)=>{setGameTitle(e.target.value)}}/>
                </p>

                <p>
                    <label>Release Date: </label><br/>
                    <input type="text"
                    name="releaseDate"
                    value={releaseDate}
                    placeholder="releaseDate"
                    onChange={(e)=>{setReleaseDate(e.target.value)}}/>
                </p>

                <p>
                    <label>console: </label><br/>
                    <input type="text"
                    name="station"
                    value={station}
                    placeholder="station"
                    onChange={(e)=>{setStation(e.target.value)}}/>
                </p>


                <p>
                    <label>Delete Game</label>
                    <br/>
                    <button onClick={deleteHandler}> Remove </button>
                </p>
                <button><input type="submit" className="blank"/></button><br/><br/>
                <a href="/"><button className="blank">Home</button></a>
            </form>

        </div>
    )
}

export default UpdateGame;