import React from 'react'

function Form() {
  
  return (
    <form className='h-[60px] w-[60%] flex flex-col gap-2 mt-2'>
      <input type="text" placeholder='Enter your name' className='border border-gray-300 text-[20px] py-1 px-2 font-light rounded text-gray-500' required/>
      <input type="text" placeholder='Enter your email' className='border border-gray-300 text-[20px] py-1 px-2 font-light rounded text-gray-500' required/>
      <button type='submit' className='border px-6 py-1 rounded bg-amber-800 text-white border-amber-600 shadow-sm text-[20px]'>submit</button>
    </form>
  )
}

export default Form