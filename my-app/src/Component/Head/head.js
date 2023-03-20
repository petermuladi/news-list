import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import {BiHome} from 'react-icons/bi';
import {RiMailLine} from 'react-icons/ri';



//Navigation - Navbar
export default function Head() {
    return (
        <Navbar bg="primary" variant="primary">
            <Container className='text-white'>
                <Nav className="me-auto align-items-center">
                    <NavLink to={'/'}>
                        <Nav.Item className='text-white'><h1>News List</h1></Nav.Item>
                    </NavLink>
                    <NavLink to={'/'}>
                   <Nav.Item className='text-white m-4'><BiHome className='mb-1'/> Home</Nav.Item>
                    </NavLink>
                    <NavLink to={'contact'}>
                        <Nav.Item className='text-white'><RiMailLine className='mb-1'/> Contact</Nav.Item>
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}
