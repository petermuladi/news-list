import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';


const url = "http://localhost:4000";


// Creating an async thunk for the contact form data
export const ContactForm = createAsyncThunk(

    'users/ContactForm',

    async (data) => {
        try {

            // Making a POST request to the API endpoint
            const response = await axios({
                method: 'POST',
                url: `${url}/contact`,
                data: data,
            })

            // If the response status is 201, show a success toast message
            if (response.status === 201) {
                return toast.success('Message Sent!',
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

            }

        } catch (error) {
            // If there is an error, show an error toast message
            return toast.error('Sorry Server Error! Try after a few minutes',
                {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
        }

    }

);