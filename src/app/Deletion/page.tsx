"use client"

import React, { useState } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const DeletionPolicyPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:support@teepaydata.com?subject=Account Deletion Request&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AReason: ${reason}`;
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-extrabold mt-14 mb-14 text-center">Account Deletion</h1>
                    <h2 className="text-3xl font-bold mb-6">Account Deletion Policy</h2>
                    <p className="mb-4">
                        At TEEPAY, we value your privacy and are committed to protecting your personal data. This Account Deletion Policy outlines the process for requesting the deletion of your account and personal data from our systems.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Requesting Account Deletion</h2>
                    <p className="mb-4">
                        If you wish to delete your account and all associated data, you can submit a request through our customer support portal or by contacting us directly at admin@teepay.site. Please include the following information in your request:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Your full name</li>
                        <li>Your email address associated with the account</li>
                        <li>A brief explanation of your request</li>
                    </ul>
                    <form onSubmit={handleSubmit} className="space-y-4 p-4 border border-gray-300 rounded-lg bg-white text-black mb-6">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-gray-700">Full Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
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
                            <label htmlFor="reason" className="block mb-2 text-gray-700">Reason for Deletion:</label>
                            <textarea
                                id="reason"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                        <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                            Submit Request
                        </button>
                    </form>
                    <h2 className="text-2xl font-bold mb-4">Processing Time</h2>
                    <p className="mb-4">
                        Please note that account deletion requests can take a few days to process. We aim to complete the deletion within 7 business days of receiving your request. During this time, you may still receive communications from us, and your account may remain active until the deletion is finalized.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                    <p className="mb-4">
                        After your account is deleted, we will remove all personal data associated with your account from our active databases. However, please be aware that we may retain certain information for legal, regulatory, or security purposes. This information will be securely stored and will not be used for any other purposes.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Impact of Account Deletion</h2>
                    <p className="mb-4">
                        Deleting your account is a permanent action and cannot be undone. Once your account is deleted, you will lose access to all services and data associated with your account, including:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Transaction history</li>
                        <li>Names and Bank Information</li>
                        <li>Account preferences and settings</li>
                    </ul>
                    <p className="mb-4">
                        If you decide to use our services again in the future, you will need to create a new account.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about this Account Deletion Policy or the deletion process, please do not hesitate to contact us at support@teepaydata.com. Our customer support team is here to assist you and ensure that your data is handled with the utmost care and respect.
                    </p>
                    <p className="mb-4">
                        Thank you for choosing TEEPAY. We appreciate your trust and are committed to protecting your privacy.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DeletionPolicyPage;