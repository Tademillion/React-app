import { Link } from "react-router-dom";
import "./App.css";
import Grid_Tables from "./Components/Begin/Grid_Tables";

function App() {
  return (
    <>
      <div className="bg-light text-black p-4 rounded-md shadow-sm hover:bg-gray-200">
        <Link to={"/forms"}>Forms</Link>
      </div>
      <Grid_Tables />
    </>
  );
}

export default App;
