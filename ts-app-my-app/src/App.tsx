import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route, Link } from "react-router-dom";
import Page1 from './Page1';
import Page2 from './Page2';
import Home from './Home';
import PanelDemo from './PanelDemo';
import Page4Bootstrap from './Page4Bootstrap';
import Page5Bootstrap from './Page5Bootstrap';
import PageNBootstrapEmpty from './PageNBootstrapEmpty';

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload2222
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
 */

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Main page</Link> |
        <Link to="/page1">Page 1</Link> |
        <Link to="/page2">Page 2</Link> |
        <Link to="/page3">Page 3 - Different Panel example </Link> |
        <Link to="/page4">Page 4 -Bootstrap </Link> |
        <Link to="/page5">Page 5 -Bootstrap </Link> |

        <Link to="/pageN">Page N -Bootstrap Empty </Link> |
      </div>

      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
        <Route path="/page2" element={<Page2/>}>
        </Route>
        <Route path="/page1" element={<Page1/>}>
        </Route>
        <Route path="/page3" element={<PanelDemo/>}>
        </Route>
        <Route path="/page4" element={<Page4Bootstrap/>}>
        </Route>
        <Route path="/page5" element={<Page5Bootstrap/>}>
        </Route>

        <Route path="/pageN" element={<PageNBootstrapEmpty/>}>
        </Route>

      </Routes>
    </Router>
  );
}
export default App;
