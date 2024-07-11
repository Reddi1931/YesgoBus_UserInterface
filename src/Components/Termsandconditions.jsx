import React from 'react';

function TermsAndConditions() {
  return (
    <div className=" min-h-screen flex flex-col items-center" style={{marginLeft:"100px"}}>
      <header className=" text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-orange-600 font-semibold">Terms and Conditions</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <p className="text-gray-700 font-bold">
          Welcome to <span className='text-orange-500'>YesGoBus </span>By using our website or mobile application, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before accessing or using our services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing or using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms of service. If you do not agree with any part of these terms, you may not use our services.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Booking and Reservations</h2>
          <p className="text-gray-700">
            Our platform provides a convenient and user-friendly interface for booking bus tickets. By making a reservation through our platform, you agree to abide by the terms and conditions set by the bus service providers.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Payment and Pricing</h2>
          <p className="text-gray-700">
            All transactions on our platform are subject to transparent pricing. By making a payment for your bus ticket, you agree to the pricing terms and conditions specified by the respective bus service provider. We reserve the right to update or modify pricing information at any time.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Cancellations and Refunds</h2>
          <p className="text-gray-700">
            Cancellations and refund policies are determined by the individual bus service providers. Please review the cancellation and refund policies of the specific bus service you choose. We are not responsible for refunds or disputes related to cancellations.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. User Conduct</h2>
          <p className="text-gray-700">
            You agree to use our platform for lawful purposes only and in a manner consistent with all applicable laws and regulations. Any unauthorized use or violation of these terms may result in the suspension or termination of your account.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-700">
            We strive to provide a reliable and seamless service; however, we are not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our platform or the bus services booked through it.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to update, modify, or replace these terms of service at any time. It is your responsibility to check this page periodically for changes. Your continued use of the platform after any modifications will constitute your acknowledgment of the changes and your consent to abide and be bound by the modified terms.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Privacy Policy</h2>
          <p className="text-gray-700">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and disclose your personal information.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions about these terms of service, please contact us at <a href="mailto:support@yesgobus.com" className="text-blue-500 hover:underline">support@yesgobus.com</a>.
          </p>
        </section>
      </main>
    </div>
  );
}

export default TermsAndConditions;
