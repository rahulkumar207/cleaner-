
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "AZA's team made our office shine! 5/5 stars.",
    author: "Corporate Client",
    rating: 5
  },
  {
    id: 2,
    quote: "Reliable and affordable. Highly recommend!",
    author: "Residential Customer",
    rating: 5
  },
  {
    id: 3,
    quote: "Excellent attention to detail. Our facility has never looked better.",
    author: "School Administrator",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-16 bg-aza-lightgrey">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-aza-grey mb-12">What Our Clients Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="fill-current text-yellow-400" size={20} />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-center text-gray-700 mb-6 italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>
            <div className="text-center text-gray-600">
              - {testimonials[activeIndex].author}
            </div>
          </div>
          
          <div className="absolute top-1/2 -left-4 -translate-y-1/2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white h-10 w-10 shadow-md"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 -translate-y-1/2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white h-10 w-10 shadow-md"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-12 rounded-full transition-all ${
                  index === activeIndex ? "bg-aza-purple" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button className="bg-aza-purple hover:bg-aza-purple/90 text-white">
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
