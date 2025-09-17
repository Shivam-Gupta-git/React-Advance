import React, { useMemo, useState } from 'react'

function UseMemoHook() {
  const[count, setCount] = useState(0)
  const[inputVal, setInputVal] = useState(0)

  const expensiveTask = (num)=>{
    console.log("Insted val")
    for(let i = 1; i < 1000000000; i++ ){}
    return num * 2
  }

  // -> without using UseMemo hook.....
  // let doubleNUm = multiNumber(inputVal)

  // -> with using UseMemo hook.....
  let doubleNUm = useMemo(() => expensiveTask(inputVal), [inputVal])

  return (
    <div className='text-2xl h-[300px] w-full bg-red-200 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center'>
        <button onClick={()=> setCount(count + 1)} className='border px-6 py-1 rounded border-gray-200 bg-amber-500 text-white shadow-sm cursor-pointer'>Increment</button>
        <h1 className='mt-2'>Count: {count}</h1>
        <input type="number" onChange={(event) => setInputVal(event.target.value)} className='border border-gray-300 outline-0 rounded text-[15px] p-2 mt-3' placeholder='Enter your number'/>
        <h1 className='mt-2'>Double: {doubleNUm}</h1>
      </div>
    </div>
  )
}

export default UseMemoHook