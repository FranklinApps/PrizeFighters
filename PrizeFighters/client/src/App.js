import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserForm from './components/users/UserForm';
import UserUpdate from './components/users/UpdateUser';
import UserInfo from './components/users/UserInfo';
import UserList from './components/users/UserList';
import GameList from './components/games/GameList';
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<UserForm/>} path='/user/new'/>
        <Route element={<UserUpdate/>} path='/user/update/:id'/>
        <Route element={<UserInfo/>} path='/user/:id'/>
        <Route element={<UserList/>} path='/users'/>
        <Route element={<GameList/>} path='/games'/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
