import React, {useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const GameList = (props) => {
    const {game, setGame} = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/game')
        .then((res) => {
            console.log(res.data);
            setGame(res.data)
        })
        .catch((err)=> {
            console.log(err);
        })
    }, [setGame]);
    const deleteGame= (idDel) => {
        axios.delete(`http://localhost:8000/api/games/${idDel}`)
        .then(res => {
            console.log(res.data);
            const newList = game.filter((games, index)=> games._id !== idDel)
            setGame(newList);
        })
        .catch(err => console.log(err.data));
    }

    return (
        <div>
            {
                game.map((games, index)=> {
                    return(
                        <div key={index}> <p key={index}> 
                        Title:{games.gameTitle}
                            {/* <Link to={`/User/${games._id}`}> More Info on {games.firstName} </Link><br/><br/>
                            <Link to={'/User/edit/' + games._id}> Edit   {games.lastName}  </Link><br></br> */}
                            <button onClick={()=> deleteGame(games._id)}> Delete </button>
                            </p>
                        </div>
                )})

            }
        </div>
    )
}
    export default GameList;