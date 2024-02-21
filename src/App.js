import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';


function App() {
  return (
    <div className="app">
      <video disablePictureInPicture src="/background_video.mp4" autoPlay loop muted/>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
