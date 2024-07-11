// src/components/BusBooking.js

import React from 'react';

const BusList = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
                <div className="flex items-center justify-between pb-4 border-b">
                    <input
                        type="text"
                        placeholder="Hyderabad"
                        className="px-4 py-2 border rounded-lg w-1/4"
                    />
                    <input
                        type="text"
                        placeholder="Chennai"
                        className="px-4 py-2 border rounded-lg w-1/4"
                    />
                    <input
                        type="date"
                        className="px-4 py-2 border rounded-lg w-1/4"
                    />
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
                        Search
                    </button>
                </div>

                <div className="flex mt-4">
                    <div className="w-1/4 pr-4">
                        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
                            <h3 className="font-semibold">Filters</h3>
                            <div className="mt-4">
                                <label className="block mb-2">Price Range</label>
                                <input type="range" min="999" max="2012" className="w-full" />
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2">Bus Type</label>
                                <div className="flex flex-wrap">
                                    <button className="bg-gray-200 px-3 py-1 rounded-lg mr-2 mb-2">AC</button>
                                    <button className="bg-gray-200 px-3 py-1 rounded-lg mr-2 mb-2">Non AC</button>
                                    <button className="bg-gray-200 px-3 py-1 rounded-lg mr-2 mb-2">Seater</button>
                                    <button className="bg-gray-200 px-3 py-1 rounded-lg mr-2 mb-2">Sleeper</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-3/4">
                        <div className="bg-white p-4 shadow-md rounded-lg mb-4 flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="bg-green-500 text-white px-3 py-1 rounded-lg">TSRTC</span>
                                <div className="ml-4">
                                    <h3 className="font-semibold">LAHARI AC SLEEPER - 9665</h3>
                                    <div className="text-sm text-gray-500">31 May 19:15 Hyderabad - 01 Jun 07:00 Chennai</div>
                                    <div className="text-sm text-gray-500">11:45 Hrs</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-semibold">₹1,555</div>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2">
                                    Show Seats
                                </button>
                                <div className="text-sm text-gray-500 mt-1">16 Seats Available</div>
                            </div>
                        </div>
                        <div className="bg-white p-4 shadow-md rounded-lg flex justify-between items-center">
                            <div className="flex items-center">
                                <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">Orange Travels</span>
                                <div className="ml-4">
                                    <h3 className="font-semibold">NON-AC Seater/Sleeper (2 + 1)</h3>
                                    <div className="text-sm text-gray-500">31 May 19:15 Hyderabad - 01 Jun 07:30 Chennai</div>
                                    <div className="text-sm text-gray-500">12:15 Hrs</div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-semibold">₹1,000</div>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-2">
                                    Show Seats
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusList;
