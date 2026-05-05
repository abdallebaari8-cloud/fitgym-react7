import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Classes from './pages/Classes'; 
import Contact from './pages/Contact'; 
import Login from './pages/Login'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<Contact />} />
        {/* Beddel line-ka 16 oo ka dhig kan: */}
<Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;