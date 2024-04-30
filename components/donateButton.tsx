'use client'
import { loadStripe } from '@stripe/stripe-js'
import { useEffect } from 'react';

const stripePromise = 
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY && 
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

  export default function DonateButton() {
    useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
      if (query.get('success')) {
        console.log('Order placed! You will receive an email confirmation.');
      }
  
      if (query.get('canceled')) {
        console.log('Order cancelled -- continue to shop around and checkout when you’re ready.');
      }
    }, []);
  
    return (
      <form action="/donate/api" method="POST">
          <button className='hover:text-yellow-400 rounded font-bold text-lg font-text' type="submit" role="link">
            Donate
          </button>
      </form>
    ); 
  }