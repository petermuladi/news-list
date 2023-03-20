import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import Alert from 'react-bootstrap/Alert';
import { useDispatch } from 'react-redux';
import { GrContact } from 'react-icons/gr';
import { TiMessage } from 'react-icons/ti';
import { AiOutlineCheck } from 'react-icons/ai';
import { ContactForm } from '../../Store/Thunks/ContactForm';

export default function Contact() {

  //Form with Formik, Validation with Yup.

  // Get the dispatch function from the useDispatch hook
  const dispatch = useDispatch();

  const formik = useFormik({

    initialValues: { email: "", firstname: "", lastname: "", message: "" },

    //Form validation with Yup.
    validationSchema: Yup.object({

      email: Yup.string().required("Sorry Email is required!").email("Sorry Invalid Email"),
      firstname: Yup.string().required("Sorry First Name is required!").max(20, "Sorry too much character"),
      lastname: Yup.string().required("Sorry Last Name is required!"),
      message: Yup.string().required("Sorry Message is required!").max(500, "Sorry the message is too long")

    }),

    // Define the submit function to dispatch the contact form action and reset the form
    //Form submit->input values
    onSubmit: (values, { resetForm }) => {
      dispatch(ContactForm(values));
      resetForm()
    }

  })
  return (
    <div>
      <h1 className='text-center m-2 text-success'><GrContact /> Contact Us</h1>
      <form className='p-5 w-70 m-auto' onSubmit={formik.handleSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Adress</label>
          <input
            type='email'
            name='email'
            className='form-control'
            placeholder='john@example.com'
            {...formik.getFieldProps('email')}
          />
          {/*validation with YUP*/}
          {formik.errors.email && formik.touched.email ?
            <Alert variant='danger'>
              {formik.errors.email}
            </Alert>
            : null}
        </div>
        <div className='form-group mt-2'>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            name='fistname'
            className='form-control'
            placeholder='enter name'
            {...formik.getFieldProps('firstname')}
          />
          {formik.errors.firstname && formik.touched.firstname ?
            <Alert variant='danger'>
              {formik.errors.firstname}
            </Alert>
            : null}
        </div>
        <div className='form-group mt-2'>
          <label htmlFor='firstname'>Last Name</label>
          <input
            type='text'
            name='lastname'
            className='form-control'
            placeholder='enter name'
            {...formik.getFieldProps('lastname')}
          />
          {formik.errors.lastname && formik.touched.lastname ?
            <Alert variant='danger'>
              {formik.errors.lastname}
            </Alert>
            : null}
        </div>
        <div className='form-group mt-2'>
          <label htmlFor='firstname'><TiMessage className='mb-1' /> Message</label>
          <textarea
            className='form-control'
            name='message'
            rows={3}
            {...formik.getFieldProps('message')}
          />
          {formik.errors.message && formik.touched.message ?
            <Alert variant='danger'>
              {formik.errors.message}
            </Alert>
            : null}
        </div>
        <button type='submit' className='btn btn-primary mt-3'>
          <AiOutlineCheck className='mb-1' /> Send Message</button>
      </form>
    </div>
  )
}
