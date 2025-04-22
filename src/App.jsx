import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './component/NavBar';
import Gallary from './pages/Gallary';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './component/Footer';

function App() {


  return (
    
 <BrowserRouter basename="/vite-react-wexplore/">
  <NavBar/>
  <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/gallary" element={<Gallary />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
   </Routes>
    <Footer />
 </BrowserRouter>
     
  
  )
}

export default App
