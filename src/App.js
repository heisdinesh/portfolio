import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from "./components"
import Landing from './pages/Landing';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes> 
    </Router>
    </div>
  );
}

export default App;
