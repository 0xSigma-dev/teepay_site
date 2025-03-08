"use client"

import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 p-6 bg-gray-100">
                <div className="container mx-auto">
                    <h1 className="text-5xl font-extrabold mt-14 mb-14 text-center">Privacy and Policy</h1>
                    <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
                    <p className="mb-4">
                        At TEEPAYEEDATA LIMITED, we are committed to protecting your privacy and ensuring that your personal data is handled with care. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                    <p className="mb-4">
                        We collect various types of information in connection with the services we provide, including:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Personal Information: This includes your name, email address, phone number, and other contact details.</li>
                        <li>Payment Information: We collect payment details such as credit card numbers and billing addresses to process transactions.</li>
                        <li>Usage Data: We collect information about how you use our services, including your IP address, browser type, and activity on our website.</li>
                        <li>Location Data: We may collect information about your location if you enable location services on your device.</li>
                        <li>Cookies and Tracking Technologies: We use cookies and similar tracking technologies to track activity on our services and hold certain information.</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>To provide and maintain our services</li>
                        <li>To process transactions and send you related information</li>
                        <li>To communicate with you, including responding to your inquiries and providing customer support</li>
                        <li>To improve our services and develop new features</li>
                        <li>To monitor and analyze usage and trends to improve your experience</li>
                        <li>To comply with legal obligations and protect our rights</li>
                        <li>To personalize your experience and provide advertisements, content, or features that match your profile and interests</li>
                        <li>To send you marketing and promotional communications</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
                    <p className="mb-4">
                        We may share your information with third parties in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>With service providers who perform services on our behalf</li>
                        <li>With business partners who offer services jointly with us</li>
                        <li>With third parties to comply with legal obligations or protect our rights</li>
                        <li>With your consent or at your direction</li>
                        <li>In connection with a merger, acquisition, or sale of all or a portion of our assets</li>
                    </ul>
                    <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                    <p className="mb-4">
                        We take the security of your data seriously and implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                    <p className="mb-4">
                        You have certain rights regarding your personal data, including the right to access, correct, or delete your information. You can also object to or restrict the processing of your data and request the transfer of your information to another organization.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
                    <p className="mb-4">
                        We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
                    <p className="mb-4">
                        Your information, including personal data, may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Children&apos;s Privacy</h2>
                    <p className="mb-4">
                        Our services are not intended for use by children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us. If we become aware that we have collected personal data from children without verification of parental consent, we take steps to remove that information from our servers.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the new policy on our website and updating the effective date.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at admin@teepay.site. Our customer support team is here to assist you and ensure that your data is handled with the utmost care and respect.
                    </p>
                    <p className="mb-4">
                        Thank you for choosing TEEPAYEEDATA LIMITED. We appreciate your trust and are committed to protecting your privacy.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;