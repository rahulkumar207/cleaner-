
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-aza-purple mb-4">AZA Services</h3>
            <p className="text-gray-600 mb-4">Premium cleaning and facility management services in Thane District.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-aza-blue hover:text-aza-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-aza-blue hover:text-aza-purple">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-aza-blue hover:text-aza-purple">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-aza-grey mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-aza-purple">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-aza-purple">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-aza-purple">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-aza-grey mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="text-aza-purple mr-2" />
                <a href="tel:9324256967" className="text-gray-600 hover:text-aza-blue">9324256967</a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-aza-purple mr-2" />
                <a href="mailto:myazaservices@gmail.com" className="text-gray-600 hover:text-aza-blue">myazaservices@gmail.com</a>
              </li>
              <li className="flex">
                <MapPin size={16} className="text-aza-purple mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-600">MIDC, Dombivali, Thane District, Maharashtra</span>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold text-aza-grey mb-4">Certificates</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white px-3 py-1 text-sm rounded shadow-sm">GST</span>
              <span className="bg-white px-3 py-1 text-sm rounded shadow-sm">PF</span>
              <span className="bg-white px-3 py-1 text-sm rounded shadow-sm">ESIC</span>
              <span className="bg-white px-3 py-1 text-sm rounded shadow-sm">Shop Act</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="text-center text-gray-500 text-sm">
            © 2024 AZA Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
