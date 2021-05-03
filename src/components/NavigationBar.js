import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Styles = styled.div`
    color: white;

    .navbar-nav .nav-link{
        color: white

        &:hover {
            color:black;
        }
    }

    .navbar {
        position:sticky;
        fixed:top;
    }

    .btn {
        margin-left: 5vw;
    }

    background-color: #090f1f;
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="sm" variant="dark">
            <Navbar.Brand>W2W</Navbar.Brand>
            <Nav className="ml-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarNav">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/">Popular</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/">Watchlist</Nav.Link></Nav.Item>
                </Navbar.Collapse>
            </Nav>
            <Button variant="outline-primary">Sign In</Button>
        </Navbar>
    </Styles>
)