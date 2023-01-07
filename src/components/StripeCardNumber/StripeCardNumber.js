import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'

function StripeCardNumber() {

  return (
    <CardElement
      options={{
        style: {
          base: {
            fontWeight: '500',
            fontSize: '16px',
            color: '#333333',
            '::placeholder': {
              color: '#7A7D85',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
  )
}
export default StripeCardNumber
