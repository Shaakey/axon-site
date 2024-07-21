"use client"; 
import React, { useState, useRef } from "react";
import Image from "next/image"; 

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const faqs = [
    { id: 1, question: "What is Vortex Executor?", answer: "Vortex is a level 3, top-tier roblox script execution tool." },
    { id: 2, question: "How do I install Vortex Executor?", answer: "At the top, you will see a button which is called Download. Click on download, and it will take you to our download page." },
    { id: 3, question: "Is there a free version of Vortex?", answer: "We are completely free, if you paid for this you have sadly been scammed. Request a refund immediately." },
    { id: 4, question: "How can I contact support?", answer: "You may contact us during our contact page. Scroll up and click on Contact and you will see our contact methods." },
  ];

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" preserveAspectRatio="none">
          <g fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M0 0H800V600H0z"/>
            <path d="M0 0C111 148 222 296 333 444S444 592 555 740c111 148 222 296 333 444V0H0z" />
          </g>
        </svg>
      </div>
      
      {/* Main Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex items-center justify-between max-w-6xl mx-8 space-x-8">
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 transform hover:scale-110 animate-pulse">
              Welcome to Vortex!
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Discover the features that set Vortex Executor apart from the rest.
            </p>
            <div className="mt-8 flex space-x-6">
              <a
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/download"
              >
                Download
              </a>
              <a
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/features"
              >
                Features
              </a>
              <a
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-2xl shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105"
                href="/contact"
              >
                Contact
              </a>
            </div>
            <p className="mt-4 text-lg text-gray-300">
                Status: UP ✅
            </p>
          </div>
          <div className="relative w-1/2">
            <Image
              src="https://cdn.discordapp.com/attachments/1263815444331102228/1264474644015222845/oEGyGs4.png?ex=669e0147&is=669cafc7&hm=ae29c314b020ac788187e3b06701e6cdabe03622586e56878b877c2bc043d1c4&"
              alt="Vortex Product"
              width={800}
              height={800}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center py-16">
        <h2 className="text-4xl font-bold text-white mb-8 animate-fadeIn">Changelog</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="text-gray-400 text-lg space-y-4">
            <li className="transition-all duration-300 hover:text-white hover:translate-x-2 animate-fadeIn">7/18/2024 - Created Executor</li>
            <li className="transition-all duration-300 hover:text-white hover:translate-x-2 animate-fadeIn">7/18/2024 - Updated UI</li>
            <li className="transition-all duration-300 hover:text-white hover:translate-x-2 animate-fadeIn">7/19/2024 - This API doesn&apos;t want to work - Fixing API</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-900 text-center py-20">
        <h2 className="text-4xl font-bold text-white mb-12 animate-bounce">Why We’re Special</h2>
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl shadow-xl mb-12 transition-transform duration-500 hover:scale-105">
            <Image
              src="https://cdn.discordapp.com/attachments/1263890433298403399/1263890645337247846/Qb2bnKw.png?ex=669be163&is=669a8fe3&hm=ec5d7d9420aab063b2c4c274a21694614b523cf7e0d890793c236a2192b1034c&"
              alt="Vortex Product"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 hover:bg-opacity-60">
              <p className="text-white text-lg font-sans font-semibold max-w-xl p-6 bg-gray-900 bg-opacity-90 rounded-2xl shadow-lg">
                Vortex stands out with its seamless functionality and reliability. Crafted by expert C# coder, <b>V4Z</b>, it’s a level 6 executor that outperforms the rest.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className='bg-gray-800 text-center py-16'>
        <h2 className='text-4xl font-bold text-white mb-8 animate-fadeIn'>FAQ</h2>
        <div className='max-w-4xl mx-auto px-4'>
          <ul className='text-gray-400 text-lg space-y-4'>
            {faqs.map((faq) => (
              <li
                key={faq.id}
                className='cursor-pointer transition-transform transform hover:scale-105'
                onClick={() => toggleFAQ(faq.id)}
              >
                <div className={`bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 ${expandedFAQ === faq.id ? "bg-gray-600" : ""}`}>
                  <p className={`text-white font-semibold ${expandedFAQ === faq.id ? 'text-blue-400' : ""}`}>
                    {faq.question}
                  </p>
                  {expandedFAQ === faq.id && (
                    <p className='text-gray-300 mt-2'>{faq.answer}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          </div>
          <br />
          <br />
          <h1 className="font-bold text-white text-lg">This website was made by monokai.pro - Co-Owner of Vortex</h1>
      </div>
    </div>
  );
}
