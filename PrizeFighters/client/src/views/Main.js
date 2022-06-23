
import React, {useState} from "react";
import GameList from '../components/games/GameList';

const Main =(props) => {
    const [game, setGame] = useState([]);

    
return (
    <div>
        <a href="/user/new" class="button"><button>register</button></a>
        <a href="/users" class="button"><button>users</button></a>
        <h1>Available Titles</h1> 
        
        <GameList game={game} setGame={setGame}/>
    
        

    </div>
)}
export default Main;