import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../src/views/Main.js'
import UserForm from './components/users/UserForm';
import UserUpdate from './components/users/UpdateUser';
import UserInfo from './components/users/UserInfo';
import UserHome from '../src/views/userHome'
import GameList from './components/games/GameList';
import GameCalender from './components/schedules/Schedule.js';
import UpdateUserPage from '../src/views/UpdateUserPage.js'
import { Eventcalender } from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import UserLogin from './components/users/UserLogin.js';
import '../src/images/DragonBallFighterz.jpg'
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<UserForm/>} path='/user/new'/>
        <Route element={<UserLogin/>} path='/user/login'/>
        <Route element={<UpdateUserPage/>} path='/user/edit/:id'/>
        <Route element={<UserInfo/>} path='/user/:id'/>
        <Route element={<UserHome/>} path='/users'/>
        <Route element={<GameList/>} path='/games'/>
        <Route element={<Main/>} path='/'/>
        <Route element={<GameCalender/>} path="/user/calender"/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
