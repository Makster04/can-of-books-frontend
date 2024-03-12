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

const DATABASE_URL = import.meta.env.DATABASE_URL;

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route 
                exact path="/books"
                element={<BestBooks />}
              />
              <Route 
                exact path="/about"
                element={<About />}
              />
              <Route 
                exact path="/books"
                element={<BestBooks />}
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
