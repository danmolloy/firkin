'use client'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'

const stripePromise = 
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && 
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  export default function DonateButton() {
    const [success, setSuccess] = useState<boolean>(false)

    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
        setSuccess(true)

      }
  
      if (query.get('canceled')) {
        console.log('Order cancelled -- continue to shop around and checkout when you’re ready.');
      }
    }, []);
  
    return (
      <form data-testid="donate-btn" action="/donate/api" method="POST">
        
          {success 
            ? <div className="z-30">
              <Confetti
        recycle={false}
        numberOfPieces={200}
      width={1000}
      height={1000}
    />
    <p className=' rounded font-bold text-lg font-text' >
            Thank You!
          </p>
              </div>
              
          : <button className='hover:text-yellow-400 rounded font-bold text-lg font-text' type="submit" role="link">
            Donate
          </button>}
      </form>
    ); 
  }