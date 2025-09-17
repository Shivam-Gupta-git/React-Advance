import React from 'react'
import useCustomHook from './CustomHook'

function UseCustomHook() {
  const {count, increment, decrement, reset} = useCustomHook(0)

  return (
    <div className='text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center'>
        <div className='w-[100%] flex items-center justify-center'>
        <h1 className=''>Custom Hook</h1>
        </div>
        <div>
          <div className='w-[100%] flex items-center justify-center mt-2 bg-amber-300 p-2 rounded'>
          <h1>Count: {count}</h1>
          </div>
          <div className='w-[100%] flex flex-row gap-3 px-3 py-2 mt-2'>
          <button className='border px-2 py-1 rounded bg-amber-800 text-white border-amber-600 shadow-sm text-[20px]' onClick={increment}>Increment</button>
          <button className='border px-2 py-1 rounded bg-amber-800 text-white border-amber-600 shadow-sm text-[20px]' onClick={decrement}>Decrement</button>
          <button className='border px-6 py-1 rounded bg-amber-800 text-white border-amber-600 shadow-sm text-[20px]' onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCustomHook