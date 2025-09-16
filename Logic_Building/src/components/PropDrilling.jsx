import React, { use, useState } from 'react'

function PropDrilling() {
  const[user, setUser] = useState("Shivam")
  return (
    <div className='text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center'>
        <h1>Prop Drilling Exapmle</h1>
        <Parents user={user}></Parents>
      </div>
    </div>
  )
}

function Parents({user}){
return <Child user={user}></Child>
}

function Child({user}){
return <GrandChild user={user}></GrandChild>
}

function GrandChild({user}){
return <h1>User Name: {user}</h1>
}

export default PropDrilling