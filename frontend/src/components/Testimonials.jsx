import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow Solutions",
      content: "AutoHub transformed our operations completely. We've reduced processing time by 70% and our team can now focus on strategic initiatives instead of repetitive tasks.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      position: "Operations Director",
      company: "Global Manufacturing Corp",
      content: "The integration capabilities are outstanding. We connected all our systems seamlessly and now have real-time visibility across our entire supply chain.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Thompson",
      position: "CTO",
      company: "HealthCare Innovations",
      content: "Security and compliance were our top concerns, and AutoHub delivered beyond expectations. We've automated our regulatory reporting while maintaining the highest standards.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "David Park",
      position: "Founder",
      company: "E-commerce Pro",
      content: "From order processing to customer service, AutoHub handles everything. Our customer satisfaction scores have increased by 40% since implementation.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Lisa Wang",
      position: "Head of Operations",
      company: "Financial First",
      content: "The ROI was evident within the first month. AutoHub's intelligent automation has saved us countless hours and significantly reduced operational costs.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Miller",
      position: "VP of Engineering",
      company: "LogiTech Systems",
      content: "Implementation was surprisingly smooth, and the support team is exceptional. AutoHub has become an integral part of our daily operations.",
      rating: 5,
      avatar: "JM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their businesses with AutoHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="h-6 w-6 text-blue-300 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed italic pl-4">
                  {testimonial.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  4.9/5
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  24hr
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;