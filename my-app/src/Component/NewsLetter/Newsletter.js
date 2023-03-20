import { AiOutlineMail } from 'react-icons/ai';
import React, { useRef} from 'react';
import Container from 'react-bootstrap/Container';
import { BiMailSend } from 'react-icons/bi';
import {useDispatch} from 'react-redux';
import {addToNewsLetter} from '../../Store/Thunks/FetchNewsLetter';
import Form from "react-bootstrap/Form";

//Subscribe newsletter
export default function Newsletter() {

    const dispatch = useDispatch()

    //Input field value
    const textInput = useRef();
    const emailInput = useRef();

    const handlerInput = (e) => {

        // Prevent the default form submission behavior
        e.preventDefault();

        let textValue = textInput.current.value;
        let emailValue = emailInput.current.value

        //console.log(textValue,emailValue)

        dispatch(addToNewsLetter({email: emailValue, name:textValue}))

        textInput.current.value = "";
        emailInput.current.value = "";

    };
    
    return (
        //Subscribe for news Form.
        <Container className='w-80'>
            <Form onSubmit={handlerInput}>
            <div className="row subscribe mt-2 p-3 bg bg-primary align-items-center justify-content-center">
                <div className="h3 text-white display-7 text-center p-3">
                    <AiOutlineMail className='mb-1' /> Subscribe for news
                </div>
                <div className="col-lg-6">
                    <input ref={textInput} name="name" className="form-control" type="text" placeholder="enter name" required />
                    <label htmlFor="name" />
                </div>
                <div className="col-lg-6">
                    <input ref={emailInput} name="email" className="form-control" type="mail" placeholder="enter email" required />
                    <label htmlFor="email" />
                </div>
                <div className="text-center m-2">
                    <button id="subscribe-btn" type="submit" className="btn btn-lg btn-danger">
                        <BiMailSend className='mb-1' /> I subscribe</button>
                </div>
            </div>
            </Form>
        </Container>
    )
}
