import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SigninPage from './paginas/signin';
import Home from './paginas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
