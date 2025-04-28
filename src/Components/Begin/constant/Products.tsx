import React from "react";
export interface Productstruct {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  inStock: boolean;
  features?: string[];
  sizes?: string[];
  colors?: string[];
  capacity?: string;
  author?: string;
  pages?: number;
  connectivity?: string;
  dpi?: number;
}
interface ProductProps {
  product: Productstruct[];
  onclickhandle: (data: Productstruct) => void;
}
const Products = ({ product, onclickhandle }: ProductProps) => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto max-w-3xl bg-white shadow-md rounded-md overflow-hidden">
          <h2 className="text-2xl font-semibold bg-gray-200 py-4 px-6">
            Product List
          </h2>
          <ul className="divide-y divide-gray-200">
            {product.map((product) => (
              <li
                key={product.id}
                className="px-6 py-4 flex items-center space-x-4"
              >
                <div className="flex-grow">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="text-sm text-gray-700">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  {product.inStock ? (
                    <span className="inline-block bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                      In Stock
                    </span>
                  ) : (
                    <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}
                </div>
                {/* You can add a "Remove" button here */}
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    onclickhandle(product);
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="container mx-auto max-w-3xl bg-white shadow-md rounded-md overflow-hidden  ">
            {" "}
            Total Number Of Products{" "}
            <span className="inline-block bg-red-200 text-red-800 text-xs px-2 py-1 rounded-full">
              {product.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
