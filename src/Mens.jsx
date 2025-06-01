import React from 'react';
import { Link } from 'react-router-dom';
import all_product_data from './data';

const Mens = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {all_product_data.all_product
        .filter((item) => item.category === 'men')
        .map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition duration-200">
              <img
                src={item.images?.[0]}
                alt={item.name}
                className="w-full h-50 object-cover rounded-md"
              />
              <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500 line-through">${item.old_price}</p>
              <p className="text-blue-600 font-bold">${item.new_price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Mens;
