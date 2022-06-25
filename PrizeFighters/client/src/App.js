import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main.js'
import UserForm from './components/users/UserForm';
import UserInfo from './components/users/UserInfo';
import UserHome from '../src/views/userHome'
import GameList from './components/games/GameList';
import GameCalender from './components/schedules/Schedule.js';
import UpdateUser from './components/users/UpdateUser.js'
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import UserLogin from './components/users/UserLogin.js';
import UpdateGame from'./components/games/UpdateGame';
import GameForm from './components/games/GameForm.js';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<UserForm/>} path='/user/new'/>
        <Route element={<UserLogin/>} path='/user/login'/>
        <Route element={<UpdateUser/>} path='/user/edit/:id'/>
        <Route element={<UserInfo/>} path='/user/:id'/>
        <Route element={<UserHome/>} path='/users'/>
        <Route element={<GameList/>} path='/games'/>
        <Route element={<Main/>} path='/'/>
        <Route element={<GameCalender/>} path="/user/calender"/>
        <Route element={<UpdateGame/>} path="/games/update/:id"/>
        <Route element={<GameForm/>} path="/games/new"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
