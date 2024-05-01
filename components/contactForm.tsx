'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from "axios";

export default function ContactForm() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="text-2xl">Message failed to send.</h2> <p>Please <a href='mailto:fiokelly@gmail.com' className='text-blue-500'>send an email</a>.</p></div>)

  const sendSuccess = (<div><h2 className="text-2xl">Message recieved!</h2><p>We will get back to you as soon as possible.</p></div>)

  const sendingMsg = (<div><h2 className="text-2xl">Message sending...</h2></div>)

  return (
      <div id="dark-section" className='px-8 pt-8 pb-16 flex flex-col bg-black text-white'>
              <h2 className="text-2xl">Join our Mailing List</h2>
              <div>
                <p className='text-gray-300'>Get info on upcoming gigs and events.</p>
{/*                 <p>Follow on instagram</p>
 */}              </div>

    <Formik    
    initialValues={{
      name: '',
      email: '',
      message: '',
    }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(30, 'Must be 30 characters or less')
        .required('name required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
      message: Yup.string()
        .max(500, 'Must be 200 characters or less')
        //.required('message required')
    })}
    onSubmit={async (values, actions ) => {
      //setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/api", values)
      .then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          setSendStatus("err")
        }
        })
       }}> 
      {(props) => (
      <Form data-testid="contact-form" className=" flex flex-col md:w-4/5 lg:w-1/2 ">

          <div className="flex flex-col m-2 ">
          <label htmlFor='name-input' className="form-label ">Name</label>
          <Field 
            id="name-input" 
            className="text-black border border-zinc-400 rounded-md w-full p-1 "
            type="text"
            name="name"/>
            <div className="h-6">
          <ErrorMessage name="name">
            { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2">
          <label htmlFor='email' className="form-label ">Email</label>
          <Field
            id="email" 
            className="text-black border border-zinc-400 rounded-md w-full p-1 " 
            type="email"
            name="email"/>
            <div className="h-6">
          <ErrorMessage name="email" >
          { msg => <div className="text-sm text-red-500 h-6">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
          <div className="flex flex-col m-2 mb-0">
          <label htmlFor='msg-text' className="form-label ">Message <span className='text-sm text-gray-500'>Optional</span></label>
          <Field 
          multiline="6"
          maxLength="500"
          rows="4"
          component="textarea"
            id="msg-text" 
            className=" text-black border border-zinc-400 rounded-md w-full p-1 "
            type="textarea"
            name="message"/>
            <div className="h-6">
            {props.values.message.length > 0 && <p className='self-center text-sm mx-2 opacity-40'>{`${props.values.message.length}/500`}</p>}

          <ErrorMessage name="message">
            { msg => <div className="text-sm text-red-500">{msg}</div> }
          </ErrorMessage>
          </div>
          </div>
        <button id="submit-button" type='submit' className="hover:bg-gray-900 border shadow-sm border-yellow-500 text-yellow-500 m-2 p-1 w-24 rounded self-end">Submit</button>
        <div>
        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div>
      </Form> )}
    </Formik>
    </div>
  )
}