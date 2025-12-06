import React from 'react';
import { Building, Heart, ShoppingCart, GraduationCap, Car, Banknote } from 'lucide-react';

const IndustriesSection = () => {
  const industries = [
    {
      icon: <Building className="h-8 w-8" />,
      name: "Manufacturing",
      description: "Streamline production lines, quality control, and supply chain management.",
      benefits: ["40% faster production", "Reduced waste", "Quality assurance"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      name: "Healthcare",
      description: "Automate patient records, appointment scheduling, and compliance reporting.",
      benefits: ["Better patient care", "Regulatory compliance", "Cost reduction"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      name: "E-commerce",
      description: "Optimize inventory management, order processing, and customer service.",
      benefits: ["Faster fulfillment", "Inventory optimization", "Customer satisfaction"]
    },
    {
      icon: <Banknote className="h-8 w-8" />,
      name: "Financial Services",
      description: "Automate trading, risk assessment, and regulatory compliance processes.",
      benefits: ["Risk mitigation", "Faster processing", "Compliance automation"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      name: "Education",
      description: "Enhance student management, grading systems, and administrative tasks.",
      benefits: ["Improved efficiency", "Better insights", "Time savings"]
    },
    {
      icon: <Car className="h-8 w-8" />,
      name: "Logistics",
      description: "Optimize route planning, fleet management, and delivery tracking.",
      benefits: ["Route optimization", "Real-time tracking", "Cost efficiency"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our automation solutions are tailored to meet the unique challenges and requirements of various industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {industry.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {industry.name}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm mb-3">Key Benefits:</h4>
                {industry.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Don't See Your Industry?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Our automation platform is highly adaptable and can be customized for virtually any industry. 
              Contact us to discuss your specific requirements and see how we can help transform your business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">Custom</div>
                <div className="text-sm text-gray-600">Tailored Solutions</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 mb-2">Flexible</div>
                <div className="text-sm text-gray-600">Adaptable Platform</div>
              </div>
              <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Scalable</div>
                <div className="text-sm text-gray-600">Growing With You</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;