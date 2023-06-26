import './App.css';
import Navbar from './components/Navbar';
import useScript from './hooks/useScript';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  useScript('https://platform.twitter.com/widgets.js', true);

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>

      <a class="twitter-timeline" data-height="480" data-dnt="true" data-theme="light" href="https://twitter.com/aykrishnan?ref_src=twsrc%5Etfw">
        Tweets by @aykrishnan
      </a>
      {/* <script type="application/javascript" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}
    </div>
  );
}

export default App;
