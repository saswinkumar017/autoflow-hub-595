import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Transform your business today with our intelligent automation solutions. 
            Join thousands of companies already experiencing unprecedented growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Get Started in 3 Simple Steps
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="text-blue-100">
                    <span className="font-semibold text-white">Book a Consultation</span> - Discuss your automation needs with our experts
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="text-blue-100">
                    <span className="font-semibold text-white">Custom Strategy</span> - Receive a tailored automation roadmap for your business
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="text-blue-100">
                    <span className="font-semibold text-white">Launch & Scale</span> - Implement solutions and watch your efficiency soar
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl transition-shadow group"
              >
                Start Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              Multiple Ways to Connect
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-200" />
                  <div>
                    <div className="font-semibold text-white">Phone Support</div>
                    <div className="text-blue-200 text-sm">+1 (555) 123-4567</div>
                    <div className="text-blue-300 text-xs">Available 24/7</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-purple-200" />
                  <div>
                    <div className="font-semibold text-white">Email Support</div>
                    <div className="text-blue-200 text-sm">hello@autohub.com</div>
                    <div className="text-blue-300 text-xs">Response within 1 hour</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="h-6 w-6 text-pink-200" />
                  <div>
                    <div className="font-semibold text-white">Live Chat</div>
                    <div className="text-blue-200 text-sm">Instant messaging support</div>
                    <div className="text-blue-300 text-xs">Available during business hours</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-center">
                <div className="text-white font-semibold mb-2">Free 30-Day Trial</div>
                <div className="text-blue-200 text-sm">No credit card required • Cancel anytime</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-white/80 font-semibold">TechCorp</div>
              <div className="text-white/80 font-semibold">GlobalManuf</div>
              <div className="text-white/80 font-semibold">HealthPlus</div>
              <div className="text-white/80 font-semibold">LogiPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;