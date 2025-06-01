import React from 'react';
import mens from './Assets/product_14.png';
import womens from './Assets/product_9.png';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-pink-100 min-h-screen p-6">
      {/* Header Title */}
   <div className="text-center my-20">
  <p className="text-4xl md:text-5xl font-bold tracking-wide text-gray-700 select-none">
    <span className="text-gray-500 mr-2 ">WellCome At</span>
    <span className="text-blue-600 tracking-widest">LOJA</span>
  </p>
</div>



      {/* Product Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-20">
        {/* Men's Collection */}
        <div className="flex flex-col items-center">
          <img
            src={mens}
            alt="Men's Collection"
            className="transition-transform duration-500 hover:scale-105 w-64 h-auto"
          />
             <button
        onClick={() => navigate('/mens')}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Men's Collection
      </button>
        </div>

        {/* Women's Collection */}
        <div className="flex flex-col items-center">
          <img
            src={womens}
            alt="Women's Collection"
            className="transition-transform duration-500 hover:scale-105 w-64 h-auto"
          />
              <button
        onClick={() => navigate('/womens')}
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Womens Collection
      </button>
        </div>
      </div>

      {/* Announcement Section */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-lg shadow-md max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed font-medium">
          <strong>New Arrivals Just Dropped!</strong> Explore the latest trends in our Men’s and Women’s collections. <br /><br />
          <strong>We’ve upgraded!</strong> Enjoy faster checkout, better tracking, and improved customer support. <br /><br />
          <strong>Free shipping</strong> on orders over $50 – no code needed! <br /><br />
          <strong>Summer Sale is ON</strong> – Up to 40% off selected styles. Limited time only!
        </p>
      </div>
    </div>
  );
};

export default Home;
