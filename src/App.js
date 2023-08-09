import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navabar} from "./components"
import Landing from './pages/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
