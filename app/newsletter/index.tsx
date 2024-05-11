'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function NewsletterIndex() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="text-2xl">Sign up failed.</h2> <p>Please try again or contact us.</p></div>)

  const sendSuccess = (<div><h2 className="text-2xl">Sign up successful!</h2></div>)

  const sendingMsg = (<div><h2 className="text-2xl">Submitting...</h2></div>)

  return (
      <div data-testid="newsletter-form" id="dark-section" className=' px-8 py-8 flex flex-col bg-white text-black'>
              <div className='border border-zinc-400 shadow rounded md:w-4/5 lg:w-1/2 p-2'>
              <h2 className="text-2xl">Join our Mailing List</h2>
              <div>
                <p className='text-gray-500'>Get info on upcoming gigs and events.</p>
              </div>

    <Formik    
    initialValues={{
      email: '',
    }}
    validationSchema={Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('email required'),
    })}
    onSubmit={async (values, actions ) => {
      setSendStatus("sending")
      await new Promise(resolve => setTimeout(resolve, 1000))
      axios.post("/newsletter/api", values)
      .then(async (res) => {
        console.log('Response received')
        if (res.status === 200) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          actions.setSubmitting(false)
          setSendStatus("err")
        }
        }).catch(e => {
          actions.setSubmitting(false)
          setSendStatus("err")
        })
       }}> 
      {(props) => (
      <Form  className=" flex flex-col  ">

          
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
          
        <button disabled={props.isSubmitting || sendStatus === "sending"} id="submit-button" type='submit' className="disabled:opacity-30 hover:bg-blue-100 border shadow-sm border-blue-500 text-blue-500 m-2 p-1 w-24 rounded self-end">Submit</button>
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
    </div>
  )
}