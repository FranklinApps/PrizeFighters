
import React, {useState} from "react";
import GameList from '../components/games/GameList';
import DragonBallFighterz from '../images/DragonBallFighterz.jpg'
import granblue from '../images/granblue.jpg'
import guilty from '../images/Guilty_Gear_Strive.jpg'
import KOF from '../images/KoFIV.jpg'
import melty from '../images/melty.jpg'
import mk11 from '../images/mk11.jpg'
import SFV from '../images/SFV.png'
import Skull from '../images/Skull Girls.jpg'
import Tekken from '../images/Tekken.jpg'
import '../App.css'
const Main =(props) => {
    const [game, setGame] = useState([]);

    
return (
    <div>
        <a href="/user/new" class="button"><button>Register</button></a>
        <a href="/users" class="button"><button>Users</button></a>
        <a href="/user/login" class="button"><button>Login</button></a>
        <a href="/user/calender" class="button"><button>Calendar</button></a>
        <a href="/games/new" class="button"><button>New Game</button></a>
        

        <h1>PrizeFighters</h1>
        <h3>Available Titles</h3> 
        
        
        <img src={DragonBallFighterz} alt='game photos'/>
        <img src={granblue} alt='game photos'/>
        <img src={guilty} alt='game photos'/>
        <img src={KOF} alt='game photos'/>
        <img src={melty} alt='game photos'/>
        <img src={mk11} alt='game photos'/>
        <img src={SFV} alt='game photos'/>
        <img src={Skull} alt='game photos'/>
        <img src={Tekken} alt='game photos'/>
        <GameList game={game} setGame={setGame}/>
        

    </div>
)}
export default Main;