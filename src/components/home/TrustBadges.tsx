
const TrustBadges = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-aza-grey mb-8">Certified & Compliant</h2>
        
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <div className="flex flex-col items-center p-4">
            <div className="text-3xl font-bold text-aza-purple mb-2">GST</div>
            <div className="text-sm text-gray-600">Registered</div>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <div className="text-3xl font-bold text-aza-purple mb-2">PF</div>
            <div className="text-sm text-gray-600">Compliant</div>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <div className="text-3xl font-bold text-aza-purple mb-2">ESIC</div>
            <div className="text-sm text-gray-600">Registered</div>
          </div>
          
          <div className="flex flex-col items-center p-4">
            <div className="text-3xl font-bold text-aza-purple mb-2">Shop Act</div>
            <div className="text-sm text-gray-600">Licensed</div>
          </div>
        </div>
        
        <p className="text-center text-gray-600 italic max-w-lg mx-auto">
          Fully Licensed, Insured, and Eco-Certified
        </p>
      </div>
    </section>
  );
};

export default TrustBadges;
