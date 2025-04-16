
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, Home, Building, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-aza-purple py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Comprehensive cleaning and facility management solutions tailored to your specific needs.
            </p>
          </div>
        </section>
        
        {/* Residential Cleaning */}
        <section id="residential" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Home className="text-aza-purple mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-aza-grey">Residential Cleaning</h2>
                </div>
                <p className="text-xl text-aza-grey italic mb-6">Spotless Homes, Happy Families</p>
                <p className="text-gray-600 mb-4">
                  Let us handle the mess while you enjoy peace of mind. Our residential cleaning services are designed to make your home shine with a level of cleanliness that you can see and feel.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you need a one-time deep clean or regular maintenance, our trained professionals use eco-friendly products and advanced techniques to deliver exceptional results.
                </p>
                
                <h3 className="text-lg font-semibold text-aza-grey mb-4">Our Residential Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Regular home cleaning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Deep cleaning services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Kitchen & bathroom sanitizing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Floor washing & polishing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Window & glass cleaning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Post-construction cleanup</p>
                  </div>
                </div>
                
                <a 
  href="https://wa.me/919324256967?text=Hi%20AZA%20Services%2C%20I%27m%20interested%20in%20getting%20a%20business%20quote." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white">
    Get a Business Quote
  </Button>
</a>

              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://img.freepik.com/free-photo/young-latin-man-cleaning-home_58466-11235.jpg?t=st=1744788955~exp=1744792555~hmac=bff1e5f584c5ea2543b9144face49a7b801f920dd8dad12820e69f6912826f2a&w=996" 
                  alt="Residential Cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Commercial Cleaning */}
        <section id="commercial" className="py-16 bg-aza-lightgrey">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://img.freepik.com/free-photo/full-shot-man-vacuuming-office-floor_23-2149345550.jpg?t=st=1744789454~exp=1744793054~hmac=32058036fcee0d03fb4dc51e5d5fa08fabebf02c9c1a4a23d8dfd1494088f15e&w=996" 
                  alt="Commercial Cleaning" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <div className="flex items-center mb-4">
                  <Building className="text-aza-purple mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-aza-grey">Commercial Cleaning</h2>
                </div>
                <p className="text-xl text-aza-grey italic mb-6">Hygienic Workspaces, Productive Teams</p>
                <p className="text-gray-600 mb-4">
                  A clean work environment enhances productivity, improves employee health, and creates a positive impression for clients and visitors. Our commercial cleaning services are designed to meet the specific needs of businesses across various industries.
                </p>
                <p className="text-gray-600 mb-6">
                  From regular maintenance to specialized services, we ensure your workplace remains pristine, hygienic, and welcoming.
                </p>
                
                <h3 className="text-lg font-semibold text-aza-grey mb-4">Our Commercial Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Office cleaning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Retail space maintenance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Healthcare facility sanitizing</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Industrial cleaning</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Restaurant & hospitality</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Educational institutions</p>
                  </div>
                </div>
                
                <a 
  href="https://wa.me/919324256967?text=Hi%20AZA%20Services%2C%20I%27m%20interested%20in%20getting%20a%20business%20quote." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white">
    Get a Business Quote
  </Button>
</a>

              </div>
            </div>
          </div>
        </section>
        
        {/* Facility Management */}
        <section id="facility" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Wrench className="text-aza-purple mr-3" size={28} />
                  <h2 className="text-3xl font-bold text-aza-grey">Facility Management</h2>
                </div>
                <p className="text-xl text-aza-grey italic mb-6">End-to-End Maintenance Solutions</p>
                <p className="text-gray-600 mb-4">
                  Integrated solutions for seamless operations – from janitorial services to equipment maintenance. Our facility management services provide comprehensive support to ensure your property functions at its best.
                </p>
                <p className="text-gray-600 mb-6">
                  Our experienced team coordinates all aspects of facility maintenance, allowing you to focus on your core business activities while we handle the rest.
                </p>
                
                <h3 className="text-lg font-semibold text-aza-grey mb-4">Our Facility Management Services Include:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Janitorial services</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Building maintenance</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Landscaping & grounds</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Security management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Waste management</p>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-2 mt-1">
                      <Check className="h-4 w-4 text-aza-purple" />
                    </div>
                    <p className="text-gray-700">Emergency response</p>
                  </div>
                </div>
                <Link to="/contact">
  <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white">
    Discuss Your Needs
  </Button>
</Link>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/377a5315-ba91-4a59-b26f-37d72536bbbf.png" 
                  alt="Facility Management" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing */}
        <section className="py-16 bg-aza-lightgrey">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-aza-grey mb-6">Flexible Pricing Plans</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              We offer customized pricing based on your specific needs and requirements. Contact us for a personalized quote.
            </p>
            
            <a 
  href="https://wa.me/919324256967?text=Hi%20AZA%20Services%2C%20I%20would%20like%20to%20request%20a%20free%20estimate." 
  target="_blank" 
  rel="noopener noreferrer"
>
  <Button 
    size="lg" 
    className="bg-aza-purple hover:bg-aza-purple/90 text-white px-8"
  >
    Request a Free Estimate
  </Button>
</a>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
