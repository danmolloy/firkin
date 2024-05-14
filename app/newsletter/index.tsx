'use client'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function NewsletterIndex() {
  const [sendStatus, setSendStatus] = useState<"success"|"sending"|"err"|null>(null)

  const sendFail = (<div><h2 className="text-md">Sign up failed.</h2> <p className='text-sm text-gray-600'>Please try again or contact us.</p></div>)

  const sendSuccess = (<div><h2 className="text-md">Sign up successful!</h2> <p className='text-sm'>You have been sent a confirmation email.</p></div>)

  const sendingMsg = (<div><h2 className="text-md">Submitting...</h2></div>)

  return (
      <div data-testid="newsletter-form" id="dark-section" className=' px-8 py-8 flex flex-col bg-white text-black'>
              <div className='border  shadow rounded md:w-4/5 lg:w-1/2 p-2'>
              <h2 className="text-xl">Join our Mailing List</h2>
              <div>
                <p className='text-gray-500 '>Get info on upcoming gigs and events.</p>
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
        if (res.data.status === 200) {
          setSendStatus("success")
          actions.setSubmitting(false)
          actions.resetForm()
        } else {
          actions.setSubmitting(false)
          setSendStatus("err")
          console.log(JSON.stringify(res))
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
          <div>
        <div className='flex flex-row-reverse justify-between'>
        <button disabled={props.isSubmitting || sendStatus === "sending"} id="submit-button" type='submit' className="disabled:opacity-30 hover:bg-blue-400 border shadow-sm  bg-blue-500 text-white m-2 p-1 w-24 rounded self-end">Submit</button>

        {sendStatus === "sending" 
        ? sendingMsg
        : sendStatus === "err" 
        ? sendFail
        : sendStatus === "success" 
        ? sendSuccess
        : null}
      </div>
      </div>
      </Form> )}
    </Formik>
    </div>
    </div>
  )
}