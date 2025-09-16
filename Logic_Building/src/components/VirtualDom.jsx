import React, { useState } from 'react'

function VirtualDom() {
  const[increment, setIncrement] = useState(0);
  const[decrement, setDecrement] = useState(0)
  
  const toggleOnIncrement = ()=>{
    setIncrement(increment + 1);
    setDecrement(decrement + 1)
  }
  const toggleOnDecrement = ()=> {
    if(decrement > 0){
      setDecrement(decrement - 1);
      setIncrement(increment - 1)
    }else{
      setDecrement(0)
    }
  }

  return (
    <div className='text-2xl h-[300px] w-full bg-amber-300 flex items-center justify-center p-2 flex-col'>
      <h1 className='mt-2 mb-3'>Example of Virtual Dom</h1>
      <div className='h-full w-[50%] bg-amber-100 flex flex-row'>
        <div className='h-full w-[50%] border flex flex-col items-center justify-center gap-2'>
          <h1>Apple Count ++</h1>
          <h1>total apple {increment}</h1>
          <button className='border px-2 py-1 rounded-2xl bg-green-100 shadow-sm border-green-200 text-gray-400 cursor-pointer' onClick={toggleOnIncrement}>Increment</button>
        </div>
        <div className='h-full w-[50%] border flex flex-col items-center justify-center gap-2'>
        <h1>Apple Count --</h1>
          <h1>total apple {decrement}</h1>
          <button className='border px-2 py-1 rounded-2xl bg-green-100 shadow-sm border-green-200 text-gray-400 cursor-pointer' onClick={toggleOnDecrement}>decrement</button>
        </div>
      </div>
    </div>
  )
}

export default VirtualDom