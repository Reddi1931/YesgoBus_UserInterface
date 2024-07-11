import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" /></head>
            <header className="bg-white shadow">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link to={"/"} className="flex flex-col items-center">
                        <i className="fas fa-bus text-4xl text-red-600 mb-1"></i>
                        <span className="text-2xl font-bold text-red-600">YES GO BUS</span>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none focus:text-red-600">
                            <i className="fas fa-bars text-2xl"></i>
                        </button>
                    </div>
                    <nav className={`flex-col md:flex md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link to="/" className="block px-2 py-1 text-gray-700 hover:text-red-600">Home</Link>
                        <Link to="/offers" className="block px-2 py-1 text-gray-700 hover:text-red-600">Offers</Link>
                        <Link to="/contactus" className="block px-2 py-1 text-gray-700 hover:text-red-600">Contact Us</Link>
                    </nav>
                    <div className={`flex-col md:flex md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link to="/login" className="block px-2 py-1 text-gray-700 hover:text-red-600">Login</Link>
                        <Link to="/signup" className="block px-2 py-1 text-gray-700 hover:text-red-600">Signup</Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
