
import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//The big wrapper container
export default function Wrapper(props) {
  return (
    <Container>
      {props.children}
      <ToastContainer />
    </Container>

  )
}
