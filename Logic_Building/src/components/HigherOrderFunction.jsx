import React, { useState } from "react";

function HigherOrderFunction() {
  return (
    <div className="text-2xl h-[300px] w-full bg-pink-200 flex items-center justify-center p-2 flex-col">
      <div className="h-full w-[50%] bg-gray-100 flex items-center justify-center flex-row p-2 gap-2 rounded">
        <ClickCounter/>
        <HoverCounter/>
      </div>
    </div>
  );
}

function ClickAction(props) {
  const { count, increment } = props;
  return (
    <div className="w-[50%] h-full border flex flex-col items-center justify-center gap-2 rounded-2xl shadow-sm border-gray-200">
      <h1>Count: {count}</h1>
      <button
        className="border px-6 py-1 rounded border-gray-200 bg-amber-500 text-white shadow-sm"
        onClick={increment}
      >
        click
      </button>
    </div>
  );
}

function HoverAction(props) {
  const { count, increment } = props;
  return (
    <div className="w-[50%] h-full border flex flex-col items-center justify-center gap-2 rounded-2xl shadow-sm border-gray-200">
      <h1>Count: {count}</h1>
      <button
        className="border px-6 py-1 rounded border-gray-200 bg-amber-500 text-white shadow-sm"
        onMouseOver={increment}
      >
        hover
      </button>
    </div>
  );
}

function WithCounter(OldComponent, incrementBy=1) {
  return function EnhancedComponents(props) {
    const [count, setCount] = useState(0);
    return (
      <OldComponent
        {...props}
        count={count}
        increment={() => setCount(count + incrementBy)}
      ></OldComponent>
    );
  };
}

// Wrap the child components
const ClickCounter = WithCounter(ClickAction, 10);
const HoverCounter = WithCounter(HoverAction, 5)

export default WithCounter(HigherOrderFunction);
