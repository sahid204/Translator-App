import { useState } from 'react'
import Navbar from './Components/Navbar';

import About from './Components/About';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as Route6 } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  const [count, setCount] = useState(0)
  const increment =()=>{
        setCount(count+1);
  }

  return (
    <>
       <Router>
        <Navbar />
        <Routes>
          <Route6 path="/Home" element={<Home/>} />
          <Route6 path="/About" element={<About />} />
          <Route6 path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
