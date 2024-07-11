// ContactUs.js
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" /></head>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"><i className="fa-solid fa-circle-info text-4xl text-red-600 p-2 mb-1"></i>Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-semibold text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send message</button>
                    </form>

                    
                    {/* Contact Information Section */}


                    <div className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl" style={{ marginTop: "60px" }}>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
                            <div className="flex flex-col items-center">
                                <h1 className='bg-neutral-200 rounded p-3 mb-2'><i class="fa-solid fa-envelope"></i></h1>
                                <strong className='font-black'>Email Us:</strong>
                                <p className="mb-2">Email us for general queries, including marketing and partnership opportunities.</p>
                                <a href="mailto:support@company.com" className="text-blue-600 dark:text-blue-400">support@yesgobus.com</a>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className='bg-neutral-200  rounded p-3 mb-2'><i class="fa-solid fa-phone"></i></h1>
                                <strong className='font-black'>Phone:</strong>
                                <p className="mb-2">Call us to speak to a member of our team. We are always happy to help.</p>
                                <a href="tel:+1234567890" className="text-blue-600 dark:text-blue-400">+91 1234567890</a>
                            </div>
                            <div className="flex flex-col items-center">
                                <h1 className='bg-neutral-200  rounded p-3 mb-2'><i class="fa-solid fa-gear"></i></h1>
                                <strong className='font-black'>Support:</strong>
                                <p className="mb-2">Email us for general queries, including marketing and partnership opportunities.</p>
                                <button type="submit" className="max-w-2xl text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Support Center</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactUs;
