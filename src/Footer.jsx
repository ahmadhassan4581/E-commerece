const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Loja. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300 text-sm">Terms of Service</a>
          <a href="#" className="hover:text-gray-300 text-sm">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
