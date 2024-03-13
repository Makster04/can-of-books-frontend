// BestBooks.jsx

import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './BestBooks.css'; // Import custom CSS file

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: true
    };
  }

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    axios
      .get('http://localhost:3001/books')
      .then(response => {
        this.setState({
          books: response.data,
          loading: false
        });
      })
      .catch(error => console.error('Error fetching books:', error.message));
  };

  handleDelete = id => {
    axios
      .delete(`http://localhost:3001/books/${id}`)
      .then(response => {
        console.log(response.data.message);
        // Update state to remove the deleted book
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.id !== id)
        }));
      })
      .catch(error => console.error('Error deleting book:', error.message));
  };

  renderBooks() {
    const { books, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    } else if (books.length > 0) {
      return (
        <Carousel>
          <TransitionGroup>
            {books.map(book => (
              <CSSTransition key={book.id} timeout={500} classNames="fade">
                <Carousel.Item>
                  <img className="book-image" src={book.imageUrl} alt={book.title} />
                  <Carousel.Caption className="book-caption">
                    <h3 className="book-title">{book.title}</h3>
                    <p className="book-author">By {book.author}</p>
                    <button onClick={() => this.handleDelete(book.id)}>Delete</button>
                  </Carousel.Caption>
                </Carousel.Item>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Carousel>
      );
    } else {
      return <p>Book collection is empty.</p>;
    }
  }

  render() {
    return (
      <div className="best-books-container">
        <h2 className="section-title">Best Books</h2>
        {this.renderBooks()}
      </div>
    );
  }
}

export default BestBooks;
