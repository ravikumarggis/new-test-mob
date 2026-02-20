import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services does Mobrib offer?',
      answer: 'Mobrib offers a comprehensive range of services including web development, mobile app development (iOS and Android), UI/UX design, SEO services, web hosting, and performance optimization. We work with modern technologies to deliver scalable and secure solutions.',
    },
    {
      question: 'How long does it take to develop a website?',
      answer: 'The timeline depends on the complexity and requirements of your project. A simple website typically takes 2-4 weeks, while more complex applications can take 2-6 months. We provide detailed project timelines during our initial consultation.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer: 'Yes, we offer comprehensive post-launch support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements to ensure your application runs smoothly.',
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in React, Node.js, TypeScript, Python, Vue.js, Angular, Flutter, React Native, Laravel, Django, and various databases like MongoDB and PostgreSQL. We stay updated with the latest technologies to provide cutting-edge solutions.',
    },
    {
      question: 'Can you help with mobile app development?',
      answer: 'Absolutely! We develop native apps for iOS and Android, as well as cross-platform applications using Flutter and React Native. We handle everything from design to deployment on app stores.',
    },
    {
      question: 'What is your development process?',
      answer: 'Our development process includes five key stages: Analysis (understanding requirements), Design (creating UI/UX), Development (building the solution), Testing (quality assurance), and Deployment (launching the product). We follow agile methodology for flexibility and transparency.',
    },
    {
      question: 'Do you offer custom solutions or use templates?',
      answer: 'We primarily develop custom solutions tailored to your specific needs and business goals. While we can work with templates for rapid prototyping, we believe custom development provides better long-term value and scalability.',
    },
    {
      question: 'How much does it cost to build a website or app?',
      answer: 'Project costs vary based on complexity, features, and requirements. We offer competitive pricing and provide detailed quotes after understanding your needs. Contact us for a free consultation and estimate.',
    },
    {
      question: 'Will my website be mobile-friendly?',
      answer: 'Yes, all our websites are fully responsive and optimized for mobile devices. We follow mobile-first design principles to ensure your site looks and performs excellently on all screen sizes.',
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Yes, we offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content optimization, and performance monitoring to improve your search engine rankings.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Certainly! We can modernize your existing website with a fresh design, improved user experience, better performance, and updated technology stack while preserving your brand identity.',
    },
    {
      question: 'How do you ensure the security of applications?',
      answer: 'We follow industry best practices including secure coding standards, regular security audits, data encryption, secure authentication, and compliance with standards like GDPR. Security is built into every stage of development.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <HelpCircle className="w-20 h-20 mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-lg md:text-xl font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-6 h-6 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
