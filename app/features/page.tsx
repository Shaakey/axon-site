"use client"; 
import React, { useState } from 'react';
import Image from 'next/image'; 

export default function Features() {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const features = [
    { id: 1, title: 'Beautiful UI', description: 'An aesthetically pleasing, reliable and beautiful user interface.' },
    { id: 2, title: 'Multiple Tabs', description: 'Get more tabs, so you can execute more scripts without having to paste it in.' },
    { id: 3, title: 'Good Inject', description: 'Efficient and reliable code injection for executing your scripts flawlessly.' },
    { id: 4, title: 'Level 6 Executor', description: 'Top-tier executor with advanced capabilities and performance.' },
    { id: 5, title: 'Pre-installed Scripts', description: 'Comes with a variety of pre-installed scripts to get you started quickly.' },
  ];

  const toggleFeature = (id: number) => {
    setExpandedFeature(expandedFeature === id ? null : id);
  };

  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="text-center p-12 bg-white shadow-2xl rounded-3xl max-w-3xl mx-4 relative overflow-hidden">
          <Image
            src="https://cdn.discordapp.com/attachments/1263457956096249917/1263482959047036949/kmeLhND.png?ex=669a65b3&is=66991433&hm=710a9db7f91257cb6762b9361bed05629d7a56b8026cf3b49bb449bef8406c19&g"
            alt="Axon Product"
            width={800}
            height={500}
            className="rounded-2xl"
          />
          <h1 className="text-5xl font-extrabold mt-8 text-gray-900 transition-transform duration-500 transform hover:scale-110 animate-pulse">Features</h1>
          <p className="mt-4 text-lg text-gray-700">
            Our top-notch executor offers you these exceptional features:
          </p>
        </div>
      </div>

      {/* Features List Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <ul className="text-center text-lg space-y-2">
            {features.map((feature) => (
              <li
                key={feature.id}
                className="transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => toggleFeature(feature.id)}
              >
                <div className={`bg-gray-700 p-4 rounded-lg shadow-md transition-all duration-300 ${expandedFeature === feature.id ? 'bg-gray-600' : ''}`}>
                  <p className="text-white font-semibold">{feature.title}</p>
                  {expandedFeature === feature.id && (
                    <p className="text-gray-300 mt-2">{feature.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center py-8">
          <a className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors" href='/'>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
