
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    "",
    "/lovable-uploads/db5acbc4-2aac-43cf-b37e-daa83b8216fd.png",
    "/lovable-uploads/14a5b0b7-3591-4804-b4fe-a5b9ca4775aa.png",
    "/lovable-uploads/0453bf3f-4a69-4c31-902e-10b76a4c78ff.png",
    "/lovable-uploads/377a5315-ba91-4a59-b26f-37d72536bbbf.png",
    "/lovable-uploads/6b679e15-3f0a-48a8-9d11-bce960c3fcd0.png",
    "/lovable-uploads/7ee8aa19-fccb-4c35-9241-3cdb7506e623.png",
    "/lovable-uploads/acce1987-784b-409b-8cac-f7d505fa8045.png"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <section className="py-16 bg-gradient-to-br from-aza-purple/5 to-aza-blue/5">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-aza-grey mb-12 animate-fade-in">Our Gallery</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 hover:-translate-y-2"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
