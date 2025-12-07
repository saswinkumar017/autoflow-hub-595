import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesOverview from '../components/ServicesOverview';
import { Bot, Workflow, Database, Shield, Zap, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const detailedServices = [
    {
      icon: <Bot className="h-12 w-12" />,
      title: "Process Automation",
      description: "Transform repetitive manual tasks into automated workflows that run seamlessly in the background.",
      features: [
        "Workflow Design & Implementation",
        "Task Scheduling & Automation",
        "Error Handling & Recovery",
        "Multi-step Process Orchestration",
        "Custom Automation Scripts",
        "Process Monitoring & Alerts"
      ],
      benefits: [
        "Save up to 80% time on routine tasks",
        "Reduce human errors by 95%",
        "Increase productivity across teams",
        "24/7 automated operations"
      ]
    },
    {
      icon: <Workflow className="h-12 w-12" />,
      title: "Integration Services",
      description: "Connect all your business tools and systems for seamless data flow and communication.",
      features: [
        "API Integration & Management",
        "Real-time Data Synchronization",
        "Custom Connector Development",
        "Legacy System Integration",
        "Cloud Platform Integration",
        "Third-party App Connections"
      ],
      benefits: [
        "Unified data across platforms",
        "Real-time synchronization",
        "Reduced manual data entry",
        "Better decision making"
      ]
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Analytics",
      description: "Turn raw data into actionable insights with automated reporting and advanced analytics.",
      features: [
        "Real-time Dashboards",
        "Predictive Analytics & ML",
        "Custom Report Generation",
        "Data Visualization Tools",
        "Automated Data Collection",
        "Business Intelligence Integration"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify trends and patterns",
        "Forecast future outcomes",
        "Monitor KPIs in real-time"
      ]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Security & Compliance",
      description: "Ensure your automated processes meet industry standards and regulatory requirements.",
      features: [
        "End-to-end Data Encryption",
        "Comprehensive Audit Trails",
        "Compliance Monitoring",
        "Access Control Management",
        "Security Scanning & Testing",
        "Regulatory Reporting Automation"
      ],
      benefits: [
        "Meet regulatory requirements",
        "Protect sensitive data",
        "Reduce compliance costs",
        "Peace of mind security"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Implementation",
      description: "Get up and running in days, not months, with our streamlined onboarding process."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support from our expert team to ensure smooth operations."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven ROI",
      description: "Average 300% ROI within the first year of implementation."
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Guaranteed Results",
      description: "We stand behind our solutions with performance guarantees and SLAs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive automation solutions designed to transform every aspect of your business operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-24">
              {detailedServices.map((service, index) => (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-blue-600">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Benefits:</h3>
                    <div className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AutoHub</span>?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We go beyond just providing tools - we partner with you for success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="text-blue-600 flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Schedule a free consultation with our automation experts and discover how we can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-shadow group"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
