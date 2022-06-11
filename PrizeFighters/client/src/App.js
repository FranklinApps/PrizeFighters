import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<UserForm/>} path='/user/new'/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
