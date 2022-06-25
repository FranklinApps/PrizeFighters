import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const GameForm = (props) => {
    const {game, setGame} = props;
    const [gameTitle, setGameTitle] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [station, setStation] = useState();
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e)=> {
        e.preventDefault();
        axios.post('http://localhost:8000/api/game', {
            gameTitle,
            releaseDate,
            station,
        })
        .then(res=>{
            navigate('/')
            console.log(res);
            console.log(res.data)
            setGame([...game, res.data]);
            setGameTitle('');
            setReleaseDate('');
            setStation('');

        })
        .catch((err)=> {
            const errorResponse = err.response.data.errors;
            const errArr = [];
            for (const key of Object.keys(errorResponse)){
                errArr.push(errorResponse[key].message)
        }
            setErrors(errArr);
        });
}

    return (
        <div>
            <h1>Register Game Title </h1>
            {errors.map((error, index)=>{
                return(<p key={index}>{error}</p>)
            })}
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Game Title: </label><br/>                    
                    <input onChange={(e)=> setGameTitle(e.target.value)} value={gameTitle} type='text' name='gameTitle'/>
                    {errors.gameTitle ? <p>{errors.gameTitle.message}</p>:null}
                </p>
                <p>
                    <label>Release Date: </label><br/>                    
                    <input onChange={(e)=> setReleaseDate(e.target.value)} value={releaseDate} type='text' name='releaseDate'/>
                    {errors.releaseDate ? <p>{errors.releaseDate.message}</p>:null}
                </p>
                <p>
                    <label>Consoles:  </label><br/>                    
                    <input onChange={(e)=> setStation(e.target.value)} value={station} type='text' name='station'/>
                    {errors.station ? <p>{errors.station.message}</p>:null}
                </p>

            <input type='submit' value='Create' className='blank'/> <br/> <br/>
            <a href="/"><button className="blank">Home</button></a>
            </form>
            
            
        </div>
    )
}

export default GameForm;
