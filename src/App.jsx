import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Link App.css here
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route 
                exact path="/"
                element={<BestBooks />}
              />
              <Route 
                exact path="/about"
                element={<About />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
