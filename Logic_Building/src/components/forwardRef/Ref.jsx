import React, { useRef } from "react";

function ForwardRef() {
  const inputRef = useRef();

  const handleInput = () => {
    console.log(inputRef.current.value); // ✅ correct way
    inputRef.current.focus(); // optional: focus input
  };

  return (
    <>
      <h1 className="text-xl font-bold mb-2"></h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type here"
        className="border p-2 rounded"
      />

      <button
        onClick={handleInput}
        className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Get Value
      </button>
    </>
  );
}

export default ForwardRef;