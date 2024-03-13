import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import BookFormModal from './BookFormModal'; // Import the BookFormModal component
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBookFormModal: false // State to control the visibility of the modal
    };
  }

  // Function to toggle the visibility of the modal
  toggleBookFormModal = () => {
    this.setState(prevState => ({
      showBookFormModal: !prevState.showBookFormModal
    }));
  };

  render() {
    return (
      <>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route 
                exact path="/about"
                element={<About />}
              />
              <Route 
                exact path="/"
                element={<BestBooks toggleBookFormModal={this.toggleBookFormModal} />}
              />
            </Routes>
          </div>
          <Footer />
        </Router>
        {this.state.showBookFormModal && <BookFormModal toggleBookFormModal={this.toggleBookFormModal} />}
      </>
    )
  }
}

export default App;
