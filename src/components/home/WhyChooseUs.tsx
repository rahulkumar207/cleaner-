
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    "Trained, Background-Checked Staff",
    "Non-Toxic, Eco-Friendly Products",
    "Flexible Pricing Plans"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-aza-grey mb-6">The AZA Difference</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1 h-6 w-6 rounded-full bg-aza-purple/10 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-aza-purple" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-600">
              Our commitment to excellence, eco-friendly practices, and customer satisfaction sets us apart from the competition. We don't just clean; we transform spaces.
            </p>
          </div>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/fc7f4963-614a-4fcd-af1a-f30d535cebd7.png" 
              alt="AZA Services Team" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
