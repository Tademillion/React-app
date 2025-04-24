import { useState } from "react";
import "./App.css";
import Grid_Tables from "./Components/Begin/Grid_Tables";

function App() {
  return (
    <>
      <div className="bg-light text-black p-4 rounded-md shadow-sm hover:bg-gray-200">
        This is a styled div.
      </div>

      <Grid_Tables />
    </>
  );
}

export default App;
