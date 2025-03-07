"use client"

import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-extrabold mt-14 mb-14 text-center">Contact Us</h1>
                    <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-gray-300 rounded-lg bg-white shadow-lg">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-gray-700 font-bold">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-gray-700 font-bold">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-2 text-gray-700 font-bold">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition-colors duration-300 font-bold">
                            Submit
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;