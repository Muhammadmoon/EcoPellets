import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-white py-12 px-8 sm:px-6 lg:px-10 border border-t shadow-sm rounded-sm">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gradient bg-gradient-to-r from-green-800 to-green-200 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We’re here to assist you. Connect with us through any of the platforms below.
            <br />
            +92 312 8500934
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 text-center">
          <div>
            <h2 className="text-2xl font-bold text-gradient bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              Contact Information
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              <a href="mailto:ecopelletsenergy@gmail.com" className="hover:text-green-600">ecopelletsenergy@gmail.com</a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
              Our Address
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              National Expansion Plan Of NICS, Jamshoro
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://www.facebook.com/ecopelletsenergy" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
            <FaFacebook className="w-12 h-12 text-blue-700 hover:text-blue-900 transform hover:scale-125 transition-transform duration-300" />
          </a>
         
          <a href="https://www.instagram.com/ecopelletenergy/" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
            <FaInstagram className="w-12 h-12 text-pink-600 hover:text-pink-800 transform hover:scale-125 transition-transform duration-300" />
          </a>
          <a href="https://www.linkedin.com/company/102318812/admin/notifications/all/" target="_blank" rel="noopener noreferrer" className="hover:animate-bounce">
            <FaLinkedin className="w-12 h-12 text-blue-800 hover:text-blue-900 transform hover:scale-125 transition-transform duration-300" />
          </a>
          <a
      href="https://wa.me/923128500934"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:animate-bounce"
    >
      <AiOutlineWhatsApp className="w-12 h-12 text-green-500 hover:text-green-700 transform hover:scale-125 transition-transform duration-300" />
    </a>
        </div>
      </div>
    </footer>
  );
}
