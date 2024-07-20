"use client"; // Mark this file as a Client Component

import Image from 'next/image';
import Link from 'next/link'; // Import Link for client-side navigation

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen font-sans text-gray-300">
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="flex items-center justify-between max-w-6xl mx-8 space-x-8">
          {/* Text Content */}
          <div className="text-left">
            <h1 className="text-5xl font-extrabold text-white transition-transform duration-500 transform hover:scale-110 animate-pulse">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              We’d love to hear feedback or suggestions! Reach out to us through the following methods.
            </p>
          </div>
          {/* Image */}
          <div className="relative w-1/2">
            <Image
              src="https://cdn.discordapp.com/attachments/1262401224825638992/1263898006898610229/W7kIBnu.png?ex=669be83e&is=669a96be&hm=ba2fcf5d689380dca4ca3083a5d58e9d7ccbab0093d6e55390c735675b7f06da&" // Replace with a relevant contact image
              alt="Contact Us"
              width={800}
              height={500}
              className="relative rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Contact Information</h2>
          <div className="flex flex-col items-center space-y-6">
            {/* Email Contact */}
            <div className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
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
            {/* Discord Contact */}
            <div className="flex items-center space-x-4 bg-gray-700 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
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
          <a href='/' className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-500 hover:scale-105">
            Return to Home
          </a>
      </div>
      <br />
      <br />
      <br />
      <h1 className="font-bold text-white text-lg align-middle justify-center flex items-center">This website was made by monokai.pro - Co-Owner of Vortex</h1>

    </div>
  );
}
