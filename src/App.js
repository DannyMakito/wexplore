
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Signup from './components/Signup';
import Products from './components/Products';

function App() {
  return (
    
 <>
    <Router>
      <Navbar />
        
       <Routes>
       <Route index element={<Home />} />
       <Route path='/services' element={<Services/>} />
       <Route path='/products' element={<Products />} />
       <Route path='/sign-up' element={<Signup />} />
       </Routes>
    
      </Router>  
 </>
  
  );
}

export default App;
