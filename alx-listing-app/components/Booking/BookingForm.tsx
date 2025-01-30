import React from 'react'

const BookingForm = () => {
  return (
    <div>
      <h2>Contact Details</h2>
      <form>
        {/* Contact Information */}
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label>First Name</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>

          <div>
            <label>Last Name</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>
        </div>

        <div className='grid grid-cols-2 mt-4'>

          <div>
            <label>Email</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>

          <div>
            <label>Phone Number</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>

        </div>

        {/* Payment Information */}
        <h2 className='text-xl font-semibold mt-6'>Pay With</h2>
        <div className='mt-4'>
          <label htmlFor="">Card Number</label>
          <input type="text" className='p-2 w-full mt-2 border' />
        </div>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          <div>
            <label>Expiration Date</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>

          <div>
            <label>CVV</label>
            <input type="text" className='border p-2 w-full mt-2' />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className='text-xl font-semibold mt-6'>Billing Address</h2>

        <div className="mt-4">
          <label>Street Adress </label>
          <input type="text" className='border p-2 w-full mt-2 ' />
        </div>

        <div className='grid gird-cols-2 mt-4 gap-4'>
          <div>
            <label>City</label>
            <input type="text" className='border w-full p-2 mt-2' />
          </div>

          <div>
            <label>State</label>
            <input type="text" className='border w-full p-2 mt-2' />
          </div>
        </div>

        <div className='grid gird-cols-2 mt-4 gap-4'>
          <div>
            <label>Zip Code</label>
            <input type="text" className='border w-full p-2 mt-2' />
          </div>

          <div>
            <label>Country</label>
            <input type="text" className='border w-full p-2 mt-2' />
          </div>
        </div>

        {/* Submit Button */}
        <button className='mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full'>
          Confirm & Pay
        </button>

      </form>
    </div>
  )
}

export default BookingForm