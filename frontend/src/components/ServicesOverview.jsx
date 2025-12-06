import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Workflow, Database, Shield, ArrowRight } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows to boost productivity and reduce human error.",
      features: ["Workflow Design", "Task Scheduling", "Error Handling"]
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Integration Services",
      description: "Connect your existing tools and systems for seamless data flow and communication.",
      features: ["API Integration", "Data Sync", "Custom Connectors"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with automated reporting and analysis.",
      features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security & Compliance",
      description: "Ensure your automated processes meet industry standards and regulatory requirements.",
      features: ["Data Encryption", "Audit Trails", "Compliance Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive automation solutions designed to transform every aspect of your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-blue-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 mb-8 text-lg leading-relaxed">
              Join thousands of companies that have already automated their workflows and experienced 
              unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-lg transition-shadow group"
              >
                Start Your Automation Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;