function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Kisandar</h2>
            <p className="mt-1 text-gray-400">Connecting Farmers & Vendors</p>
          </div>

          {/* Middle Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Right Section */}
          <div className="text-gray-300">
            <p>© 2024 MERN PROJECT Varun,Tejas,Vatsalya</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-facebook-f"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-twitter"></i> {/* Twitter Icon */}
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            <i className="fab fa-linkedin"></i> {/* LinkedIn Icon */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
