
import { Button } from "@/components/ui/button";
import { Home, Building, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Spotless Homes, Happy Families",
      icon: Home,
      link: "/services#residential"
    },
    {
      title: "Commercial Cleaning",
      description: "Hygienic Workspaces, Productive Teams",
      icon: Building,
      link: "/services#commercial"
    },
    {
      title: "Facility Management",
      description: "End-to-End Maintenance Solutions",
      icon: Wrench,
      link: "/services#facility"
    }
  ];

  return (
    <section className="py-16 bg-aza-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Our Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="p-6">
                <div className="w-16 h-16 mx-auto bg-aza-purple/10 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-aza-purple" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-center text-aza-grey mb-3">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                <div className="text-center">
                  <Link to={service.link}>
                    <Button className="bg-aza-blue hover:bg-aza-blue/90 text-white">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
