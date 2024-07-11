import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
         <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center md:flex md:justify-around">
                    <div className="mb-4 md:mb-0">
                        <Link to={"/privacypolicy"} className="mx-2 text-gray-400 hover:text-white">Privacy Policy</Link>
                        <Link to={"/termsandconditions"}  className="mx-2 text-gray-400 hover:text-white">Terms of Service</Link>
                        <Link to={"/contactus"} className="mx-2 text-gray-400 hover:text-white">Contact Us</Link>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="mb-2 text-3xl font-medium dark:text-white">Get in Touch</h2>
                        <p className='mb-4'>Follow us on social media and stay updated <br className="hidden md:block" />with the latest information about our services</p>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a href="https://www.linkedin.com/in/yesgobus-company-2b8771292/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    <p className="text-center">&copy; 2024 BusTicket. All rights reserved.</p>
                </div>
            </footer>

    </>
  )
}

export default Footer