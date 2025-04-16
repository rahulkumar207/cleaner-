import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, SprayCan } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Residential Cleaning",
    description: "Professional cleaning services for your home",
    icon: Home,
    image: "https://img.freepik.com/free-photo/young-latin-man-cleaning-home_58466-11235.jpg?t=st=1744788955~exp=1744792555~hmac=bff1e5f584c5ea2543b9144face49a7b801f920dd8dad12820e69f6912826f2a&w=996",
    link: "/services#residential"
  },
  {
    title: "Commercial Cleaning",
    description: "Keep your workplace pristine and professional",
    icon: Building2,
    image: "https://img.freepik.com/free-photo/professional-cleaning-service-person-cleaning-office_23-2150520627.jpg?ga=GA1.1.1936653394.1734588426&semt=ais_hybrid&w=740",
    link: "/services#commercial"
  },
  {
    title: "Facility Management",
    description: "Complete facility maintenance solutions",
    icon: Wrench,
    image: "/lovable-uploads/377a5315-ba91-4a59-b26f-37d72536bbbf.png",
    link: "/services#facility"
  },
  {
    title: "Specialized Cleaning",
    description: "Custom solutions for unique cleaning needs",
    icon: SprayCan,
    image: "https://img.freepik.com/free-photo/professional-industrial-cleaner-protective-uniform-cleaning-floor-food-processing-plant_342744-1209.jpg?t=st=1744796890~exp=1744800490~hmac=0bf67201815d17b81048bcbc4884a2f45c0923a016374d62aacc60e1b3f9b1fc&w=996",
    link: "/services"
  }
];

const ServicesCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-aza-purple/5 to-aza-blue/5 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Our Services</h2>

        {/* Wrapper to handle arrow positioning and z-index */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative h-48 overflow-hidden rounded-t-lg">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <service.icon className="w-6 h-6 text-aza-purple mr-2" />
                            <h3 className="text-xl font-semibold text-aza-grey">{service.title}</h3>
                          </div>
                          <p className="text-gray-600 mb-4">{service.description}</p>
                          <Link to={service.link}>
                            <Button className="w-full bg-aza-blue hover:bg-aza-blue/90 text-white">
                              Learn More
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows with responsive visibility and z-index */}
            <CarouselPrevious className="z-20 absolute -left-2 top-1/2 -translate-y-1/2 hidden sm:flex" />
            <CarouselNext className="z-20 absolute -right-2 top-1/2 -translate-y-1/2 hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
