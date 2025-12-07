import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';
import { Zap, Target, Users, Shield, Globe, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AutoHub</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Pioneering the future of business automation with innovative solutions that empower organizations worldwide.
              </p>
            </div>
          </div>
        </section>

        <AboutSection />

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-6">
                  <Zap className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We constantly push boundaries to deliver cutting-edge automation solutions that stay ahead of industry trends.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-6">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Success</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your success is our success. We're committed to providing exceptional support and ensuring positive outcomes.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-6">
                  <Target className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Results Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on delivering measurable results and tangible ROI for every client we serve.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-6">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Security & Trust</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize data security and build trust through transparency, reliability, and ethical practices.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-pink-600 mb-6">
                  <Globe className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive to make automation accessible to businesses worldwide, creating positive global impact.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-6">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards in everything we do, from product quality to customer service.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Our mission is to democratize business automation, making it accessible, affordable, and effective for organizations of all sizes. 
                  We believe that every business deserves the opportunity to leverage cutting-edge technology to streamline operations, 
                  reduce costs, and unlock their full potential.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through continuous innovation, exceptional service, and a relentless focus on customer success, 
                  we're building a world where businesses can focus on what they do best while automation handles the rest.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Journey
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Be part of the automation revolution and transform your business today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-shadow"
                >
                  Get Started
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                >
                  Explore Services
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

export default About;
