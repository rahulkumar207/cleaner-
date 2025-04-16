"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const heroImages = [
  {
    url: "https://img.freepik.com/free-photo/full-shot-men-cleaning-office_23-2149345516.jpg?t=st=1744787560~exp=1744791160~hmac=6b93738002e8699e09d94f8a83db4e50759699258c0177765e44c82f76954fad&w=996",
    alt: "Professional office cleaning",
  },
  {
    url: "https://img.freepik.com/free-photo/people-disinfecting-biohazard-area_23-2148848552.jpg?t=st=1744787789~exp=1744791389~hmac=2815cf0dde9fefa630d3e36471272495396097ae5025c7f5c7818363b36411f8&w=996",
    alt: "Home cleaning service",
  },
  {
    url: "https://img.freepik.com/free-photo/cafe-owner-cleaning-tables-with-disinfectant-while-reopening-covid19-pandemic_637285-8020.jpg?t=st=1744787876~exp=1744791476~hmac=5c1c5982d5e04418ec1cf98d50f775254276233983977f3cb2c316e68aa7e837&w=996",
    alt: "Commercial cleaning",
  },
  {
    url: "https://img.freepik.com/free-photo/portrait-man-doing-household-chores-participating-cleaning-home_23-2151468794.jpg?t=st=1744788153~exp=1744791753~hmac=a9d63623ccc1a23abb54eeece37e6b004f0c808f1891d0456bcb4409901eeeca&w=996",
    alt: "Residential cleaning",
  },
]

const services = [
  {
    title: "Office Cleaning",
    description: "Keep your workspace spotless and productive.",
    icon: "🧹",
  },
  {
    title: "Home Cleaning",
    description: "A clean home is a happy home.",
    icon: "🏠",
  },
  {
    title: "Carpet Cleaning",
    description: "Restore the beauty of your carpets.",
    icon: "🧼",
  },
  {
    title: "Window Cleaning",
    description: "Crystal-clear windows for a brighter view.",
    icon: "🪟",
  },
]

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative pt-20 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 bg-cover bg-center transition-opacity duration-1000",
              "after:content-[''] after:absolute after:inset-0 after:bg-black/40",
              index === activeIndex ? "opacity-100" : "opacity-0",
            )}
            style={{
              backgroundImage: `url('${image.url}')`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-in fade-in duration-700">
            Transforming Spaces, Delivering Trust
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-in fade-in duration-700 delay-300">
            Premium Cleaning & Facility Management Services in Thane District
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in duration-700 delay-500">
            <Link to="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6">
                Book a Service Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-500/10 hover:bg-blue-500/20 border-blue-500 text-white px-8 py-6 flex items-center justify-center"
            >
              <Phone className="mr-2" size={18} />
              Call: 9324256967
            </Button>
          </div>
        </div>
      </div>

      {/* Services Slider */}
      <div className="relative z-10 bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105 duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
