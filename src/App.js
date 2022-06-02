import './App.css';
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Detail from "./Detail"

function App() {
  return (
    <Router> 
    <Navbar/> 
    <Routes>
    <Route path="/" element={<Detail/>} />
    </Routes>
    </Router>
  );
}

export default App;
