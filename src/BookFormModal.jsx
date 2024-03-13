import React, { useState } from 'react';
import axios from 'axios';

const BookFormModal = ({ toggleBookFormModal }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    imageUrl: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/books', formData);
      console.log('New Book Added:', response.data);
      // You can update the state or trigger a re-fetch of the book list here
      toggleBookFormModal(); // Close the modal after successful submission
    } catch (error) {
      console.error('Error adding new book:', error.message);
      // Handle errors here
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={toggleBookFormModal}>&times;</span>
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookFormModal;
