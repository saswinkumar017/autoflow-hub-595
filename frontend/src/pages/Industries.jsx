import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IndustriesSection from '../components/IndustriesSection';
import { Building, Heart, ShoppingCart, Banknote, GraduationCap, Car, BarChart3, Layers, Network } from 'lucide-react';

const Industries = () => {
  const industryStats = [
    {
      icon: <Building className="h-10 w-10" />,
      title: "Manufacturing",
      stats: [
        { label: "Process Efficiency", value: "+45%" },
        { label: "Downtime Reduction", value: "-60%" }
      ]
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Healthcare",
      stats: [
        { label: "Patient Experience", value: "+35%" },
        { label: "Compliance Accuracy", value: "99.9%" }
      ]
    },
    {
      icon: <ShoppingCart className="h-10 w-10" />,
      title: "E-commerce",
      stats: [
        { label: "Order Processing Speed", value: "2x" },
        { label: "Customer Satisfaction", value: "+40%" }
      ]
    },
    {
      icon: <Banknote className="h-10 w-10" />,
      title: "Finance",
      stats: [
        { label: "Risk Assessment", value: "10x faster" },
        { label: "Reporting Accuracy", value: "99.5%" }
      ]
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Education",
      stats: [
        { label: "Administrative Efficiency", value: "+50%" },
        { label: "Student Engagement", value: "+30%" }
      ]
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Logistics",
      stats: [
        { label: "Delivery Accuracy", value: "99%" },
        { label: "Route Optimization", value: "+55%" }
      ]
    }
  ];

  const capabilities = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Industry Analytics",
      description: "Custom dashboards and KPIs tailored to each industry's unique needs."
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Custom Workflows",
      description: "Industry-specific automation workflows built for your processes."
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Integrated Systems",
      description: "Connect all your industry tools into one seamless platform."
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
                Industries We <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Empower</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tailored automation solutions designed to meet the specific challenges of your industry.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {industryStats.map((industry, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-8 shadow-lg">
                  <div className="text-blue-600 mb-6">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {industry.title}
                  </h3>
                  <div className="space-y-4">
                    {industry.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-blue-100">
                        <div className="text-sm text-gray-500">{stat.label}</div>
                        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl font-bold">Enterprise-Grade Capabilities</h2>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Whether you're a startup or an enterprise organization, our platform adapts to your needs with
                  robust features and industry-specific expertise.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="mb-4 flex justify-center text-white">
                        {capability.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{capability.title}</h3>
                      <p className="text-blue-100 text-sm leading-relaxed">{capability.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <IndustriesSection />

        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Let's Talk About Your Industry
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Schedule a consultation with our experts to discuss your unique requirements.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-shadow"
              >
                Book a Consultation
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full border border-blue-100 hover:shadow-lg transition-shadow"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
