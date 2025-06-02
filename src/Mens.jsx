import React from 'react';
import { Link } from 'react-router-dom';
import all_product_data from './data';

const Mens = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6">
      {all_product_data.all_product
        .filter((item) => item.category === 'men')
        .map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <div className="bg-white rounded-2xl shadow-xl p-4 cursor-pointer hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={item.images?.[0]}
                  alt={item.name}
                  className="w-full h-50 object-cover rounded-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h2 className="mt-4 text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
                {item.name}
              </h2>
              <div className="mt-2 flex items-center gap-2">
                <p className="text-sm text-gray-400 line-through">${item.old_price}</p>
                <p className="text-lg font-semibold text-blue-600">${item.new_price}</p>
              </div>
              <p className="mt-1 text-xs text-gray-500 italic">Best seller</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Mens;
