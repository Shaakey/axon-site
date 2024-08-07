"use client"; // Mark this file as a Client Component

import Image from 'next/image';
import Link from 'next/link'; // Import Link for client-side navigation

export default function Download() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-gray-300">
      {/* Hero Section */}
      <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl rounded-3xl max-w-2xl mx-4 mb-8">
        <h1 className="text-4xl font-extrabold text-gray-100 mb-4">Download Our Software</h1>
        <p className="text-lg text-gray-300 mb-6">
          Get the latest version of our software and enjoy its amazing features. Click the button below to start your download.
        </p>
      </div>

      {/* Download Button */}
      <div className="flex items-center justify-center mb-8">
          <a className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105" href='https://cdn.discordapp.com/attachments/1263566352518746243/1264391842707800116/VortexRelease.zip?ex=669db42a&is=669c62aa&hm=dc44f9ebf1a5a6c7b784601ed80ecb4f492baf1c629cb0125a9935d476816d14&'>
            Download Now
          </a>
      </div>

      {/* Return to Home Button */}
      <div className="absolute bottom-8 flex justify-center w-full">
          <a className="bg-gray-700 text-white py-2 px-6 rounded-lg shadow-md hover:bg-gray-800 transition-colors" href='/'>
            Return to Home
          </a>
      </div>
      <h1 className="font-bold text-white text-lg align-middle justify-center flex items-center">This website was made by monokai.pro - Co-Owner of Axon</h1>
    </div>
  );
}
