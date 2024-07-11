import React from 'react'
import { useState } from 'react';
function Faq() {
    const [activeFaq, setActiveFaq] = useState(null);
    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };
  return (
    <>
        <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3 className="text-xl font-bold cursor-pointer mb-2" onClick={() => toggleFaq(0)}>
                                What is the cancellation policy?
                            </h3>
                            {activeFaq === 0 && (
                                <p className="text-gray-700">
                                    You can cancel your booking up to 24 hours before departure. A cancellation fee may apply.
                                </p>
                            )}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3
                                className="text-xl font-bold cursor-pointer mb-2"
                                onClick={() => toggleFaq(1)}
                            >
                                How do I reschedule my trip?
                            </h3>
                            {activeFaq === 1 && (
                                <p className="text-gray-700">
                                    To reschedule, go to your bookings and select the trip you want to reschedule. Follow the prompts to choose a new date.
                                </p>
                            )}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3
                                className="text-xl font-bold cursor-pointer mb-2"
                                onClick={() => toggleFaq(2)}
                            >
                                Are there any discounts for frequent travelers?
                            </h3>
                            {activeFaq === 2 && (
                                <p className="text-gray-700">
                                    Yes, we offer loyalty discounts for frequent travelers. Check our offers page for more details.
                                </p>
                            )}
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                            <h3
                                className="text-xl font-bold cursor-pointer mb-2"
                                onClick={() => toggleFaq(3)}
                            >
                                How to signup Yesgobus?
                            </h3>
                            {activeFaq === 3 && (
                                <p className="text-gray-700">
                                    You can sign-up using your mobile number or email or Google account. YesgoBus offers a one-step sign-up & login process with just an OTP received on your mobile or email.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Faq