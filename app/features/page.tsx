"use client"; 
import React, { useState, useRef } from 'react';
import Image from 'next/image'; 

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const featuresRef = useRef<HTMLDivElement | null>(null);

  const features = [
    { id: 1, title: 'Beautiful UI', description: 'An aesthetically pleasing, reliable and beautiful user interface.' },
    { id: 2, title: 'Multiple Tabs', description: 'Get more tabs, so you can execute more scripts without having to paste it in.' },
    { id: 3, title: 'Good Inject', description: 'Efficient and reliable code injection for executing your scripts flawlessly.' },
    { id: 4, title: 'Level 3 Executor', description: 'Top-tier executor with advanced capabilities and performance.' },
    { id: 5, title: 'Pre-installed Scripts', description: 'Comes with a variety of pre-installed scripts to get you started quickly.' },
  ];

  const toggleFeature = (id: number) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex items-center justify-between max-w-6xl mx-8 space-x-8">
          {/* Text Content */}
          <div className="text-left space-y-4">
            <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 transform hover:scale-110 animate-pulse">
              Features
            </h1>
            <p className="text-lg text-gray-300">
              Explore the exceptional features of Vortex Executor and how it stands out in performance and usability.
            </p>
            {/* Scroll Down Button */}
            <button
              onClick={scrollToFeatures}
              className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              See Features
            </button>
          </div>
          {/* Image */}
          <div className="relative w-1/2">
            <Image
              src="https://cdn.discordapp.com/attachments/1263457956096249917/1263482959047036949/kmeLhND.png?ex=669a65b3&is=66991433&hm=710a9db7f91257cb6762b9361bed05629d7a56b8026cf3b49bb449bef8406c19&g"
              alt="Vortex Product"
              width={800}
              height={500}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Features List Section */}
      <div ref={featuresRef} className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="text-lg space-y-4">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => toggleFeature(feature.id)}
              >
                <div className={`bg-gray-700 p-6 rounded-lg shadow-lg transition-all duration-300 ${expandedFeature === feature.id ? 'bg-gray-600' : ''}`}>
                  <p className={`text-white font-semibold ${expandedFeature === feature.id ? 'text-blue-400' : ''}`}>
                    {feature.title}
                  </p>
                  {expandedFeature === feature.id && (
                    <p className="text-gray-300 mt-2">{feature.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center py-8">
          <a className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105" href='/'>
            Return to Home
          </a>
        </div>
          <br />
          <br />
          <h1 className="font-bold text-white text-lg align-middle justify-center flex items-center">This website was made by monokai.pro - Co-Owner of Vortex</h1>
      </div>
      
    </div>
  );
}
