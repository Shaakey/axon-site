"use client"; // Mark this file as a Client Component

import Image from 'next/image';
import Link from 'next/link'; // Import Link for client-side navigation

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-300">
      {/* Hero Section */}  
      <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-16 flex items-center justify-center">
        <div className="text-center p-8 bg-white shadow-2xl rounded-3xl max-w-3xl mx-4">
          <h1 className="text-4xl font-bold mt-8 text-gray-900 transition-transform duration-500 transform hover:scale-110 animate-pulse">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-8">
            We’d love to hear feedback or suggestions! Reach out to us through the following methods.
          </p>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Our Contact Information</h2>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg shadow-md">
              <Image
                src="https://cdn.discordapp.com/attachments/1263457956096249917/1263472461773668433/image.png?ex=669a5bed&is=66990a6d&hm=068fd2772dc48c1ffecd4d39db889f12e12bd23cfb6809e47d9221b2fe27a46f&" // Replace with your logo or contact icon
                alt="Email"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="text-gray-300 text-lg">
                <span className="font-semibold">Email:</span> monokai@gangsta.lol
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg shadow-md">
              <Image
                src="https://cdn.discordapp.com/attachments/1263457956096249917/1263472461773668433/image.png?ex=669a5bed&is=66990a6d&hm=068fd2772dc48c1ffecd4d39db889f12e12bd23cfb6809e47d9221b2fe27a46f&" // Replace with your logo or contact icon
                alt="Discord"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="text-gray-300 text-lg">
                <span className="font-semibold">Discord:</span> monokai.pro, terrorists.lol, rifles.lol
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Return to Home Button */}
      <div className="flex justify-center py-8">
          <a className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors" href='/'>
            Return to Home
          </a>
      </div>
    </div>
  );
}
