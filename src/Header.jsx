import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 via-rose-100 to-pink-300 shadow-md">
      <ul className="flex justify-center space-x-10 p-4 text-lg font-semibold text-gray-700 font-serif">
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to='/'>HOME</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/mens">MENS</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/womens">WOMENS</Link>
        </li>
        <li className="hover:text-blue-600 transition cursor-pointer">
          <Link to="/new">NEW</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
