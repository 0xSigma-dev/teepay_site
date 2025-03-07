"use client";

import Image from 'next/image';

const Intro = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 ml-30">
          <p className="text-5xl sm:text-6xl md:text-6xl font-bold mb-6">
            Pay Your Bills <br></br> with Ease.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">
              <Image src="/img/apple.avif" alt="apple" width={120} height={120} className="hover:opacity-80 transition-opacity duration-300" />
            </a>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <Image src="/img/google.avif" alt="google" width={120} height={120} className="hover:opacity-80 transition-opacity duration-300" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 sm:mt-8 md:mt-0">
          <Image src="/img/Awoof.jpeg" alt="Awoof" width={500} height={500} className="opacity-50 md:opacity-75 transition-opacity duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Intro;