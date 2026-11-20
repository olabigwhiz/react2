import { useState } from "react";
function Counter() {
  //useState is used to store and mutate data
  const [data, setData] = useState(0);

  function handleIncrement() {
    setData(data + 1)
  }

  function handleDecrement() {
    if(data !== 0) {
      setData(data - 1)
    }
  }

  return (
    <div className="flex gap-8 py-16 flex-row justify-center items-center w-full h-full">
      <button className="text-2xl font-bold hover:bg-amber-200 hover:rounded px-4 py-1.5" onClick={handleIncrement}>+</button>
      <p className="text-4xl py-1.5 px-4 rounded text-white bg-green-700">{data}</p>
      <button className="text-2xl font-bold hover:bg-amber-200 hover:rounded px-4 py-1.5" onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter;
