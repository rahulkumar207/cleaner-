import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/public/lovable-uploads/4b3c83dc-725d-4e93-9693-5c03fb6b97ca.png" 
              alt="AZA Services Logo" 
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold text-aza-purple">AZA Services</h1>
              <span className="text-xs md:text-sm text-aza-grey italic">Housekeeping & Facility Multi-Management Experts</span>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-aza-grey hover:text-aza-purple font-medium">Home</Link>
          <Link to="/about" className="text-aza-grey hover:text-aza-purple font-medium">About Us</Link>
          <Link to="/services" className="text-aza-grey hover:text-aza-purple font-medium">Services</Link>
          <Link to="/gallery" className="text-aza-grey hover:text-aza-purple font-medium">Gallery</Link>
          <Link to="/certifications" className="text-aza-grey hover:text-aza-purple font-medium">Certifications</Link>
          <Link to="/contact" className="text-aza-grey hover:text-aza-purple font-medium">Contact</Link>
          
          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/919324256967?text=Hi%20AZA%20Services%2C%20I%20am%20interested%20in%20your%20facility%20management%20services." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white ml-2">
              Get a Free Quote
            </Button>
          </a>
        </nav>

        <button 
          className="md:hidden text-aza-grey"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link to="/" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/services" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
            <Link to="/gallery" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/certifications" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Certifications</Link>
            <Link to="/contact" className="text-aza-grey hover:text-aza-purple font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>

            {/* WhatsApp Button for Mobile */}
            <a 
              href="https://wa.me/919324256967?text=Hi%20AZA%20Services%2C%20I%20am%20interested%20in%20your%20facility%20management%20services." 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white w-full">
                Get a Free Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
