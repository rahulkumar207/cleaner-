
import { Check, Leaf, Clock } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-aza-grey mb-4">Why AZA Services?</h2>
          <p className="text-gray-600 text-lg">
            From residential homes to corporate spaces, AZA Services combines advanced cleaning techniques with eco-friendly practices to deliver unmatched reliability. Trusted by 100+ clients across Thane.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-aza-lightgrey rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-aza-purple/10 rounded-full flex items-center justify-center mb-4">
              <Check className="text-aza-purple" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-aza-grey mb-2">100% Satisfaction Guaranteed</h3>
            <p className="text-gray-600 text-center">Our commitment to excellence ensures your complete satisfaction.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-aza-lightgrey rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-aza-purple/10 rounded-full flex items-center justify-center mb-4">
              <Leaf className="text-aza-purple" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-aza-grey mb-2">Green Cleaning Products</h3>
            <p className="text-gray-600 text-center">We use eco-friendly products that are safe for your family and the environment.</p>
          </div>
          
          <div className="flex flex-col items-center p-6 bg-aza-lightgrey rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-aza-purple/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="text-aza-purple" size={24} />
            </div>
            <h3 className="text-lg font-semibold text-aza-grey mb-2">24/7 Emergency Services</h3>
            <p className="text-gray-600 text-center">We're always available when you need urgent cleaning assistance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
