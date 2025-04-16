
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-aza-purple py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Certifications</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              AZA Services is fully licensed, insured, and compliant with all industry regulations.
            </p>
          </div>
        </section>
        
        {/* Certificates Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-aza-grey mb-6">Our Compliance Commitment</h2>
              <p className="text-gray-600">
                At AZA Services, we maintain the highest standards of regulatory compliance and professional certification. This ensures our operations are legally sound, our workforce is protected, and our clients receive service from a fully accredited organization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative">
                <div className="p-6 bg-aza-lightgrey rounded-lg shadow-sm h-full">
                  <h3 className="text-xl font-semibold text-aza-grey mb-4 flex items-center">
                    <Award className="text-aza-purple mr-2" />
                    Business Registrations
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">GST Registration</h4>
                        <p className="text-gray-600 text-sm">Fully compliant with Goods and Services Tax regulations.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">Shop Act License</h4>
                        <p className="text-gray-600 text-sm">Licensed under the Shop and Establishment Act.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">MSME Registration</h4>
                        <p className="text-gray-600 text-sm">Registered as a Micro, Small and Medium Enterprise.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="p-6 bg-aza-lightgrey rounded-lg shadow-sm h-full">
                  <h3 className="text-xl font-semibold text-aza-grey mb-4 flex items-center">
                    <Award className="text-aza-purple mr-2" />
                    Employee Welfare Compliance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">Provident Fund (PF)</h4>
                        <p className="text-gray-600 text-sm">Registered with the Employees' Provident Fund Organization.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">ESIC Compliance</h4>
                        <p className="text-gray-600 text-sm">Enrolled with the Employees' State Insurance Corporation.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="text-aza-purple mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-medium text-aza-grey">Professional Tax Registration</h4>
                        <p className="text-gray-600 text-sm">Compliant with state-specific professional tax requirements.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Certificate Display */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-center text-aza-grey mb-8">Our Certifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/lovable-uploads/0453bf3f-4a69-4c31-902e-10b76a4c78ff.png" 
                    alt="AZA Services Certificates" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src="/lovable-uploads/377a5315-ba91-4a59-b26f-37d72536bbbf.png" 
                    alt="AZA Services Office with Certificates" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industry Standards */}
        <section className="py-16 bg-aza-lightgrey">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Industry Standards We Follow</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-aza-grey mb-3">Safety Standards</h3>
                <p className="text-gray-600">
                  We adhere to strict safety protocols to protect our staff and clients during all service operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-aza-grey mb-3">Environmental Compliance</h3>
                <p className="text-gray-600">
                  Our eco-friendly cleaning practices meet and exceed environmental regulations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-aza-grey mb-3">Quality Assurance</h3>
                <p className="text-gray-600">
                  Regular quality checks and client feedback systems ensure consistent service excellence.
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

export default Certifications;
