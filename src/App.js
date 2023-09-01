import NavBar from './components/NavigationBar/index.js';
import React from 'react';
import Home from './views/HomePage/index.js';
import Scan from './views/ScanPage/index.js';
import AboutUs from './views/AboutPage/index.js';
import History from './views/HistoryPage/index.js';
import Contact from './views/ContactPage/index.js';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              {/* call navigation bar function */}
              <NavBar></NavBar>
            </li>
            {/* routes to nevigation bar tabs */}
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Scan" element={<Scan />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/History" element={<History />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </ul>
        </nav>
      </div>
    );
  }
}

export default App;