import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: '#8F0'
};

const Header = (props) => {
    return (
        <Navbar style={navbarStyle}>
            <Container>
                <Navbar.Brand href='/'>{props.title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;