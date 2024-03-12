import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    // Make a GET request to your server's /books route using Axios
    axios.get('/books')
      .then(response => {
        // Store the book data returned from the server in the application state
        this.setState({ books: response.data });
      })
      .catch(error => console.error('Error fetching books:', error));
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning & Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          // Render books using Bootstrap carousel with unique styling
          <div id="bookCarousel" className="carousel slide my-carousel" data-bs-ride="carousel">
            <div className="carousel-inner">
              {this.state.books.map((book, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={book.imageUrl} className="d-block w-100 my-carousel-image" alt={book.title} />
                  <div className="carousel-caption my-carousel-caption">
                    <h5>{book.title}</h5>
                    <p>{book.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev my-carousel-control" type="button" data-bs-target="#bookCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next my-carousel-control" type="button" data-bs-target="#bookCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        ) : (
          // Render a message if no books are found
          <h3>No Books Found</h3>
        )}

        {/* Link to the About page */}
        <Link to="./About" className="link-about">About</Link>
      </>
    )
  }
}

export default BestBooks;
