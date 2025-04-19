import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import NavBar from './component/NavBar';

function App() {


  return (
    
 <BrowserRouter>
  <NavBar/>
  <Routes>
      <Route path="/" element={<Home />}></Route>
   </Routes>

 </BrowserRouter>
     
  
  )
}

export default App
