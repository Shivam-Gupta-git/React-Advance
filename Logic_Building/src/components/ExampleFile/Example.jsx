import react, { useEffect, useRef } from 'react'

function Example (){
  const inputRef = useRef(null);
  
  const submit = () => {
    console.log(inputRef.current.value);
    inputRef.current.focus()
  }
  return(
    <>
    <input ref={inputRef} type="text" />
    <button onClick={submit}>Submit</button> 
    </>
  )
}

export default Example