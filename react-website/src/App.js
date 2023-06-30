import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/pages/Home/Header';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <video src="/background_video.mp4" autoPlay loop muted/>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
