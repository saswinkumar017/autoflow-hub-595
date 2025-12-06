import React from 'react';
import { Zap, Target, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What is <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">AutoHub</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AutoHub is a comprehensive automation platform that empowers businesses to streamline their operations, 
            eliminate repetitive tasks, and focus on what matters most - growing their business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Revolutionizing Business Operations
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We believe that automation shouldn't be complex. Our platform provides intuitive tools 
                that allow businesses of all sizes to automate workflows, integrate systems, and optimize 
                processes without requiring technical expertise.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From small startups to enterprise corporations, AutoHub adapts to your unique needs, 
                providing scalable solutions that grow with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Zap className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">10x</div>
                <div className="text-sm text-gray-600">Faster Processing</div>
              </div>
              <div className="text-center p-4">
                <Target className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Error Reduction</div>
              </div>
              <div className="text-center p-4">
                <Users className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900">50%</div>
                <div className="text-sm text-gray-600">Cost Savings</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Intelligent Automation</h4>
                  <p className="text-sm text-gray-600">
                    AI-powered workflows that adapt and learn from your business patterns
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Seamless Integration</h4>
                  <p className="text-sm text-gray-600">
                    Connect with 500+ popular business tools and platforms effortlessly
                  </p>
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Monitor performance and optimize workflows with detailed insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Automation?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900">Increase Efficiency</h4>
                <p className="text-gray-600 text-sm">
                  Eliminate manual tasks and free up your team to focus on strategic initiatives
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900">Reduce Costs</h4>
                <p className="text-gray-600 text-sm">
                  Lower operational expenses while improving accuracy and speed
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900">Scale Rapidly</h4>
                <p className="text-gray-600 text-sm">
                  Grow your business without proportionally increasing your workforce
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;