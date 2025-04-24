import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-light text-black p-4 rounded-md shadow-sm hover:bg-blue-700">
        This is a styled div.
      </div>
    </>
  );
}

export default App;
