
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Check } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-aza-purple py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About AZA Services</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Learn about our journey, our mission, and the people who make AZA Services the trusted choice for cleaning and facility management in Thane.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-aza-grey mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  AZA Services was founded with a simple mission: to provide top-quality cleaning and facility management services that transform spaces and exceed expectations.
                </p>
                <p className="text-gray-600 mb-4">
                  What started as a small family business has grown into a trusted provider serving hundreds of clients across Thane District. Our commitment to quality, reliability, and eco-friendly practices remains at the heart of everything we do.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be a fully certified and compliant organization with a dedicated team of professionals who share our vision of excellence.
                </p>
              </div>
              
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/6b679e15-3f0a-48a8-9d11-bce960c3fcd0.png" 
                  alt="AZA Services Founders" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-aza-lightgrey">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-aza-grey mb-2">Leadership</h3>
                  <p className="text-gray-600 mb-4">
                    Our leadership team brings decades of combined experience in facility management and cleaning services. They are committed to maintaining the highest standards of service delivery and client satisfaction.
                  </p>
                  <img 
                    src="/lovable-uploads/acce1987-784b-409b-8cac-f7d505fa8045.png" 
                    alt="AZA Services Leadership" 
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-aza-grey mb-2">Cleaning Professionals</h3>
                  <p className="text-gray-600 mb-4">
                    Our cleaning staff is the backbone of our operations. Each member undergoes thorough training in advanced cleaning techniques, safety protocols, and customer service to ensure consistent, high-quality results.
                  </p>
                  <img 
                    src="/lovable-uploads/b2d08458-1f3d-4a7c-bb1e-6d9ecdb9b248.png" 
                    alt="AZA Services Cleaning Staff" 
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-aza-grey mb-4">Why Our Team Stands Out</h3>
              <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-aza-purple/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-aza-purple" />
                  </div>
                  <p className="text-gray-700">Thoroughly background-checked</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-aza-purple/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-aza-purple" />
                  </div>
                  <p className="text-gray-700">Professionally trained</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-aza-purple/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-aza-purple" />
                  </div>
                  <p className="text-gray-700">Regularly evaluated</p>
                </div>
                <div className="flex items-start">
                  <div className="mr-3 mt-1 h-6 w-6 rounded-full bg-aza-purple/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-aza-purple" />
                  </div>
                  <p className="text-gray-700">Customer-focused approach</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-aza-lightgrey p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-aza-grey mb-3">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from the cleaning products we use to the final results we deliver.
                </p>
              </div>
              
              <div className="bg-aza-lightgrey p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-aza-grey mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty, transparency, and ethical practices in all our client and employee relationships.
                </p>
              </div>
              
              <div className="bg-aza-lightgrey p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-aza-grey mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We are committed to environmentally responsible practices, using eco-friendly products and minimizing waste.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
