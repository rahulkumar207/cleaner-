
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would submit the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-aza-purple py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Reach out to discuss your cleaning needs or request a free quote. We're here to help!
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-aza-grey mb-6">Get In Touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-aza-purple/10 p-3 rounded-full mr-4">
                      <Phone className="text-aza-purple" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-aza-grey mb-1">Phone</h3>
                      <p className="text-gray-600">9324256967</p>
                      <p className="text-gray-600">9228898654</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-aza-purple/10 p-3 rounded-full mr-4">
                      <Mail className="text-aza-purple" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-aza-grey mb-1">Email</h3>
                      <p className="text-gray-600">myazaservices@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-aza-purple/10 p-3 rounded-full mr-4">
                      <MapPin className="text-aza-purple" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-aza-grey mb-1">Address</h3>
                      <p className="text-gray-600">
                        Gala No.11, Balaji Rahiman Society, Near Sahyadri School, MIDC, Phase-1, Dombivali East, Thane, Maharashtra, 421203
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-aza-purple/10 p-3 rounded-full mr-4">
                      <Clock className="text-aza-purple" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-aza-grey mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
                
                {/* Map or Image */}
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img 
                    src="/lovable-uploads/7ee8aa19-fccb-4c35-9241-3cdb7506e623.png" 
                    alt="AZA Services Location" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-aza-lightgrey p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-aza-grey mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Cleaning</option>
                        <option value="commercial">Commercial Cleaning</option>
                        <option value="facility">Facility Management</option>
                        <option value="other">Other Services</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your needs..."
                        required
                        className="w-full min-h-[120px]"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-aza-purple hover:bg-aza-purple/90 text-white py-6"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
