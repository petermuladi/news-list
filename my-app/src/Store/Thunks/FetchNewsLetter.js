
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const url = "http://localhost:4000";

export const addToNewsLetter = createAsyncThunk(
    'users/addToNewsLetter',

    async (data) => {
        try {
            const findUser = await axios.get(`${url}/newsletter?email=${data.email}`);

            //check 
            if (Array.isArray(!findUser.data) || !findUser.data.length) {

                //toast message
                const toastySuccess = toast.success('Signup successful',
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

                 //Fetch   
                const response = await axios({
                    method: 'POST',
                    url: `${url}/newsletter`,
                    data: {
                        name: data.name,
                        email: data.email,
                    }
                });

                //console.log(findUser)
                return {

                    newsletter: '😎 Cool Added',
                    email: response.data.email,
                    name: response.data.name,
                    toastySuccess
                }

            } else {
                //toast message
                const toastyError = toast.error('This email address is already registered',
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

                return {

                    toastyError
                }

            }

        } catch (error) {
            console.log(error)
        }
    }

)
