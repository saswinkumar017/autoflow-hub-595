import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cookies = () => {
  const sections = [
    {
      title: 'What Are Cookies?',
      content: [
        'Cookies are small text files stored on your device by websites you visit. They help us remember your preferences and improve your browsing experience.'
      ]
    },
    {
      title: 'How We Use Cookies',
      content: [
        'Essential cookies that allow the site to function properly and keep your session secure.',
        'Analytics cookies that help us understand how visitors use our website so that we can improve content and navigation.',
        'Preference cookies that remember your settings and customization choices.'
      ]
    },
    {
      title: 'Managing Cookies',
      content: [
        'You can control or delete cookies through your browser settings at any time.',
        'Blocking certain cookies may impact your experience on our website.',
        'For detailed instructions, refer to the support documentation for your browser or device.'
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
              Cookie <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Learn how AutoHub uses cookies and how you can manage them.
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
              <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
              <p className="text-blue-100 mb-4">
                Contact our privacy team at privacy@autohub.com if you have questions about our cookie usage.
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

export default Cookies;
