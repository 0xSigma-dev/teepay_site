"use client"

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:teepay000@gmail.com?subject=Ask Us Anything&body=${message}`;
    };

    return (
        <footer className="flex flex-col bg-gradient-to-r from-green-500 to-gray-500 text-white p-6 mt-auto">
            <div className="flex flex-col md:flex-row mb-6 ml-12">
                <div className="flex-1 mb-6 md:mb-0">
                    <h3 className="text-lg font-bold mb-4">Ask Us Anything</h3>
                    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-300 rounded-lg bg-white text-black">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-gray-700">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-gray-700">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex-1 mb-6 md:mb-0 md:ml-12 sm:ml-0">
                    <h3 className="text-lg font-bold mb-4">Links</h3>
                    <ul className="list-none p-0 space-y-2">
                        <li><a href="/privacy-policy" className="hover:underline">Privacy and Policy</a></li>
                        <li><a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a></li>
                        <li><a href="/Deletion" className="hover:underline">Account Deletion</a></li>
                    </ul>
                    <div className="mt-4">
                        <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                        <ul className="list-none p-0 space-y-2">
                            <li className="flex items-center">
                                <FaWhatsapp className="mr-2" /> +1234567890
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-2" /> teepay000@gmail.com
                            </li>
                            <li className="flex items-center">
                                <FaInstagram className="mr-2" /> @teepay
                            </li>
                            <li className="flex items-center">
                                <FaMapMarkerAlt className="mr-2" /> 123 Teepay Street, City, Country
                            </li>
                        </ul>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="text-center">
                <p>&copy; {new Date().getFullYear()} Teepay. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;