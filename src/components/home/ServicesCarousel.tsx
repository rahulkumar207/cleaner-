
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
    image: "/lovable-uploads/1c6c25b3-3258-4d95-aecc-a0f13413564c.png",
    link: "/services#residential"
  },
  {
    title: "Commercial Cleaning",
    description: "Keep your workplace pristine and professional",
    icon: Building2,
    image: "/lovable-uploads/db5acbc4-2aac-43cf-b37e-daa83b8216fd.png",
    link: "/services#commercial"
  },
  {
    title: "Facility Management",
    description: "Complete facility maintenance solutions",
    icon: Wrench,
    image: "/lovable-uploads/14a5b0b7-3591-4804-b4fe-a5b9ca4775aa.png",
    link: "/services#facility"
  },
  {
    title: "Specialized Cleaning",
    description: "Custom solutions for unique cleaning needs",
    icon: SprayCan,
    image: "/lovable-uploads/377a5315-ba91-4a59-b26f-37d72536bbbf.png",
    link: "/services"
  }
];

const ServicesCarousel = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-aza-purple/5 to-aza-blue/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">Our Services</h2>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesCarousel;
