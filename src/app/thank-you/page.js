import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center'>
        <div className='flex flex-col  items-center'>
        <Image alt="Scanner image"  src='/images/paymentScanner.jpeg' height='300' width='300' />
        <h2 className='py-2 font-semibold text-md'>Send screenshot after successful payment on 9152418196</h2>
        </div>
    </div>
  )
}
