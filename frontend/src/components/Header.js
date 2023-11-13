import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: '#eeeeee',
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Logo style={{ maxWidth: '64rem', maxHeight: '4rem' }} />
      </Container>
    </Navbar>
  );
};

export default Header;
