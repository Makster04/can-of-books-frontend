import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true // Add loading state
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/books')
      .then(response => {
        this.setState({ 
          books: response.data,
          loading: false // Update loading state
        });
      })
      .catch(error => console.error('Error fetching books:', error.message));
  }

  renderBooks() {
    const { books, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>; // Display loading state
    } else if (books.length > 0) {
      return (
        <Carousel>
          {books.map(book => (
            <Carousel.Item key={book.id}>
              <img
                className="d-block w-100"
                src={book.imageUrl}
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      );
    } else {
      return <p>Book collection is empty.</p>;
    }
  }

  render() {
    return (
      <div>
        <h2>Best Books</h2>
        {this.renderBooks()}
      </div>
    );
  }
}

export default BestBooks;
