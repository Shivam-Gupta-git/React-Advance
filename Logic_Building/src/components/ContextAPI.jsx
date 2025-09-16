import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

function ContextAPI() {
  const[user, setUser] = useState("Shivam")
  return (
    <UserContext.Provider value={user}>
    <div className='text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col'>
      <div className='h-full w-[50%] bg-gray-100 flex flex-col items-center justify-center'>
       <h1>Context Api Example</h1>
       <Parents></Parents>
      </div>
    </div>
    </UserContext.Provider>
  )
}

function Parents (){
return <Child></Child>
}

function Child (){
return <GrandChild></GrandChild>
}

function GrandChild (){
  const user = useContext(UserContext)
  return <h1>User Name: {user}</h1>
}

export default ContextAPI