import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Terms = () => {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using AutoHub\'s automation platform and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
        'If you do not agree with any part of these terms, you should discontinue use of our services immediately.'
      ]
    },
    {
      title: 'Service Description',
      content: [
        'AutoHub provides intelligent business automation solutions including process automation, integration services, data analytics, and security compliance tools.',
        'We reserve the right to modify, suspend, or discontinue any aspect of the service with reasonable notice to customers.',
        'Service availability is subject to scheduled maintenance and emergency updates.'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.',
        'You agree to use our services only for lawful purposes and in compliance with all applicable regulations.',
        'You must not attempt to gain unauthorized access to any part of our platform or interfere with its operation.'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All content, software, and technology on the AutoHub platform are the property of AutoHub and protected by intellectual property laws.',
        'You retain ownership of your data processed through our platform, while granting us a license to operate the service.',
        'You may not reverse engineer, copy, or redistribute any part of our proprietary technology.'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'AutoHub provides services on an "as is" basis and does not guarantee uninterrupted or error-free operation.',
        'We are not liable for indirect, incidental, or consequential damages arising from the use of our services.',
        'Our total liability is limited to the amount paid by you for the services in the preceding 12 months.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using AutoHub's automation services.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 mt-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <p className="text-gray-600 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
              <p className="text-blue-100 mb-4">
                If you have questions about these terms, please contact our legal team at legal@autohub.com.
              </p>
              <p className="text-sm text-blue-100">
                Last updated: January 2024
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
