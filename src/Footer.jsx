import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Navbar.Brand>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
