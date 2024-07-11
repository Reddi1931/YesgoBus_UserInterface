import React from 'react';

function PrivacyPolicy() {
  return (
    <div className=" min-h-screen flex flex-col items-center" style={{marginLeft:"100px"}}>
      <header className=" text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-orange-500 font-semibold">Privacy Policy</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          
          <p className="text-gray-700 font-bold">
          Welcome to <span className='text-orange-500'>YesGoBus </span>This Privacy Policy explains how we collect, use, and protect the personal information you provide while using our website or mobile application.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700">
            We collect personal information when you use our platform to book bus tickets. This information may include:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Contact information (such as name, email address, and phone number)</li>
            <li>Payment information</li>
            <li>Travel preferences</li>
            <li>Booking history</li>
            <li>Device information (such as device type)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>To facilitate bus ticket bookings and reservations</li>
            <li>To process payments and transactions</li>
            <li>To communicate with you regarding your bookings and updates</li>
            <li>To provide customer support and address inquiries</li>
            <li>To improve and enhance our platform and services</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Security</h2>
          <p className="text-gray-700">
            We take the security of your personal information seriously. We implement industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Third-Party Services</h2>
          <p className="text-gray-700">
            We may use third-party services to facilitate payments or analyze platform usage. These third parties may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            We use cookies and similar tracking technologies to enhance your experience on our platform. You can manage your cookie preferences through your browser settings.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Children's Privacy</h2>
          <p className="text-gray-700">
            Our platform is not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Privacy Policy</h2>
          <p className="text-gray-700">
            We reserve the right to update, modify, or replace this Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page. Your continued use of the platform after any modifications will constitute your acknowledgment of the changes and your consent to abide and be bound by the modified policy.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:support@yesgobus.com" className="text-blue-500 hover:underline">support@yesgobus.com</a>.
          </p>
          <p className="text-gray-700 mt-4">
            Thank you for trusting YesGoBus. We are committed to safeguarding your privacy and providing you with a secure and enjoyable booking experience.
          </p>
        </section>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
