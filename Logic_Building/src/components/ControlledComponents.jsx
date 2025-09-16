import React, { useState } from "react";

function ControlledComponents() {
  const [val, setVal] = useState("");
  const [submittedVal, setSubmittedVal] = useState("");

  const handelSubmitButton = (event) => {
    event.preventDefault();
    setSubmittedVal(val); 
    setVal(""); 
  };

  return (
    <div className="text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col">
      <form
        onSubmit={handelSubmitButton}
        className="h-full w-[50%] bg-gray-500 flex flex-col items-center justify-center gap-3"
      >
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-gray-200 rounded p-2 outline-0"
            value={val}
            onChange={(event) => setVal(event.target.value)}
          />
          <button
            type="submit"
            className="border border-gray-300 px-4 rounded text-black bg-gray-300"
          >
            click
          </button>
        </div>

        <div className="h-20 border w-[60%] rounded border-gray-300 bg-gray-400 flex items-center justify-center">
          <p>{submittedVal}</p> 
        </div>
      </form>
    </div>
  );
}

export default ControlledComponents;