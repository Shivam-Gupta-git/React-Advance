import React, { Suspense, lazy, useState } from 'react'
const Form = lazy(() => import('./Form'))

function Lazyloading() {
  const[viewForm, setViewForm] = useState(false)

  const toggleClickButton = () => setViewForm((prev) => !prev)
  

  return (
    <div className='text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center'>
        <div>
          <h1>Lazy Loading</h1>
        </div>
        {
          viewForm === true ? <Suspense fallback={<h3>loading....</h3>}><Form></Form></Suspense> : null
        }
        {
          viewForm === true ? null : <button className='border px-6 py-1 rounded bg-amber-800 text-white border-amber-600 shadow-sm text-[20px] cursor-pointer mt-3' onClick={toggleClickButton}>Click</button>
        }
        
      </div>
    </div>
  )
}

export default Lazyloading