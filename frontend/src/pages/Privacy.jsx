import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy = () => {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Contact details such as name, email address, company name, and phone number when you inquire about our services.',
        'Usage information about how you interact with our website and platform to help us improve our services.',
        'Technical information including IP addresses, browser type, and device data to maintain security and performance.'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'Deliver and improve our automation services and customer experience.',
        'Communicate with you regarding product updates, support, and marketing information with your consent.',
        'Protect our platform from security threats and comply with legal obligations.'
      ]
    },
    {
      title: 'Your Rights & Choices',
      content: [
        'Access, update, or delete your personal information at any time by contacting our support team.',
        'Opt out of marketing communications via the unsubscribe link in our emails.',
        'Request a copy of the information we hold about you in a portable format.'
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
              Privacy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Your privacy matters to us. This policy explains how AutoHub collects, uses, and protects your information.
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
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-blue-100 mb-4">
                If you have any questions about this policy or how we handle your data, please contact our privacy team at privacy@autohub.com.
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

export default Privacy;
