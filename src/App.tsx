import { Link } from "react-router-dom";
import "./App.css";
import Grid_Tables, { UserProps } from "./Components/Begin/Grid_Tables";
import CountUsers from "./Components/Begin/Props-DataTransfer/CountUsers";
import { useEffect, useState } from "react";
import users from "../src/Components/Begin/constant/users.json";
import products from "./Components/Begin/constant/Products.json";
import Products, { Productstruct } from "./Components/Begin/constant/Products";

function App() {
  const HandleClick = (p: Productstruct) => {
    SetProduct(product.filter((product) => product.id !== p.id));
  };
  const [product, SetProduct] = useState(products.products);
  return (
    <>
      {/*   now transfer data from gridtables to app compnents and count the number of the users */}

      <div className="bg-light text-black p-4 rounded-md shadow-sm hover:bg-gray-200">
        <Link to={"/forms"}>Forms</Link>
        <Link to={"/products"}> Products</Link>
      </div>
      <Grid_Tables />

      <CountUsers users={users.users} />
      <Products product={product} onclickhandle={HandleClick}></Products>
    </>
  );
}

export default App;
