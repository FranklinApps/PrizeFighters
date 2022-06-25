import React, { useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const GameList = (props)=> {
    const {game, setGame} = props;
    useEffect(()=>{
        axios.get('http://localhost:8000/api/game')
        .then((res)=>{
            console.log(res.data);
            setGame(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [setGame]);
    return(
        <div>
            {
                game.map((games, index)=> {
                    return(
                        <div key={index} className='list'> <p key={index}>
                        Game Title: {games.gameTitle} <br/>
                        Year: {games.releaseDate}<br/>
                        Consoles: {games.station}<br/>
                        <Link to={'/games/update/' + games._id}> <button> Edit   {games.lastName}</button>  </Link><br/><br/>
                            </p>
                            </div>
                    )
                    
                })
            }
        
            
        </div>
    )
}
export default GameList;