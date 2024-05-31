
import { useState } from 'react';
import './App.css';
import Image from "./4464061.jpg"
import Homepage from "./components/Home/Homepage"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setLoginUser] = useState({})
  return (
    <div className="App" style={{backgroundImage: `url(${Image})`}}>
      <Router>
        <Routes>
          <Route path="/"
            element={
              user && user.id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />
             } />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
