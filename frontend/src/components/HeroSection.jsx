import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your Business with </span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Intelligent Automation
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                Streamline operations, reduce costs, and accelerate growth with our cutting-edge automation solutions. Join thousands of companies already transforming their workflows.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-shadow group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-white hover:shadow-lg transition-all"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Companies Automated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                  <Bot className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI-Powered</h3>
                  <p className="text-sm text-gray-600">Smart automation that learns and adapts</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-8">
                  <div className="h-8 w-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Scalable</h3>
                  <p className="text-sm text-gray-600">Grows with your business needs</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">
                  <div className="h-8 w-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure</h3>
                  <p className="text-sm text-gray-600">Enterprise-grade security</p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg mt-8">
                  <div className="h-8 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4"></div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Setup</h3>
                  <p className="text-sm text-gray-600">Deploy in minutes, not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;