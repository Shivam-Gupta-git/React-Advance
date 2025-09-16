import React, { useState } from 'react'

function UseStateHook() {
  const[value, setValue] = useState(0)

  const toggleAddValue = ()=> {
   setValue(value + 1);
  }

  const toggleRemoveValue = () => {
    if(value > 0){
      setValue (value - 1);
    }else{
      setValue(0)
    }
  }

  return (
    <div className='text-2xl h-[300px] w-full bg-gray-300 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-amber-100 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center mt-2'>
        <h1 className='text-2xl font-bold'>Counter Count</h1>
        <p className='text-xl mt-2'>Count Value {value}</p>
        </div>
        <div className='flex flex-col items-center gap-2 mt-3'>
        <button className='border px-2 py-1 rounded bg-gray-400 border-gray-300 shadow-sm shadow-gray-500 cursor-pointer text-[20px] text-white hover:border-black' onClick={toggleAddValue}>Add Value</button>
        <button className='border px-2 py-1 rounded bg-gray-400 border-gray-300 shadow-sm shadow-gray-500 cursor-pointer text-[20px] text-white hover:border-black' onClick={toggleRemoveValue}>Remove Value</button>
        </div>
      </div>
    </div>
  )
}

export default UseStateHook