
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(135deg, rgba(158,52,158,0.1) 0%, rgba(158,52,158,0.2) 100%)' }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-aza-grey mb-6">Ready for a Cleaner Space?</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          Experience the difference professional cleaning can make for your home or business. Contact us today for a consultation!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-aza-purple hover:bg-aza-purple/90 text-white px-8 py-6"
          >
            Get Your Free Quote
          </Button>
          <Button 
            size="lg"
            variant="outline" 
            className="bg-white border-aza-blue text-aza-blue hover:bg-aza-blue/10 px-8 py-6 flex items-center justify-center"
          >
            <Phone className="mr-2" size={18} />
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
