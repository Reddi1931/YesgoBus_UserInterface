import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Offers from './Offers';
import FeaturedRoots from './FeaturedRoots';
import Reviews from './Reviews';
import Showoffers from './Showoffers';
import Faq from './Faq';
import Busservices from './Busservices';

function Home() {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState('');
    const [showFromDropdown, setShowFromDropdown] = useState(false);
    const [showToDropdown, setShowToDropdown] = useState(false);
    const TopCities = ["Hyderabad", "Bangalore", "Delhi", "Chennai", "Visakhapatnam"];
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    }, []);

    const swapLocations = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    const setToday = () => {
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    };

    const setTomorrow = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setDate(tomorrow.toISOString().split('T')[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/buslist', { state: { from, to, date } });
    };

    return (
        <>
            <section
                className=""style={{backgroundImage:'url(https://i.pinimg.com/474x/47/16/ce/4716ce8bd1b85dec75f8541d7ffc5a94.jpg)'}}>
                <div className="container mx-auto px-4 py-24 text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Book Your Bus Tickets</h1>
                    <p className="text-lg text-gray-800 mb-8">Fast, Secure & Reliable</p>
                    <div className="bg-white rounded-lg shadow-lg p-6 inline-block">
                        <form className="space-y-4 md:space-y-0 md:flex md:space-x-4" onSubmit={handleSubmit}>
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="From"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    onFocus={() => setShowFromDropdown(true)}
                                    onBlur={() => setTimeout(() => setShowFromDropdown(false), 100)}
                                />
                                {showFromDropdown && (
                                    <div className="absolute left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                                        {TopCities.map((city) => (
                                            <div
                                                key={city}
                                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onMouseDown={() => {
                                                    setFrom(city);
                                                    setShowFromDropdown(false);
                                                }}
                                            >
                                                {city}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <button
                                type="button"
                                className="text-2xl text-gray-700 hover:text-red-600 px-2"
                                onClick={swapLocations}
                            >
                                ⇄
                            </button>

                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="To"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    onFocus={() => setShowToDropdown(true)}
                                    onBlur={() => setTimeout(() => setShowToDropdown(false), 100)}
                                />
                                {showToDropdown && (
                                    <div className="absolute left-0 w-full mt-2 bg-white border rounded-lg shadow-lg z-10">
                                        {TopCities.map((city) => (
                                            <div
                                                key={city}
                                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                                onMouseDown={() => {
                                                    setTo(city);
                                                    setShowToDropdown(false);
                                                }}
                                            >
                                                {city}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center space-x-4">
                                <input
                                    type="date"
                                    className="w-full px-4 py-2 border rounded-lg"
                                    value={date}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <button
                                    type="button"
                                    className="bg-zinc-100 text-black px-4 py-2 rounded-lg hover:bg-red-100 cursor-pointer hover:text-red-400"
                                    onClick={setToday}>
                                    Today
                                </button>
                                <button
                                    type="button"
                                    className="bg-zinc-100 text-black px-4 py-2 rounded-lg hover:bg-red-100 cursor-pointer hover:text-red-400"
                                    onClick={setTomorrow}>
                                    Tomorrow
                                </button>
                            </div>
                            <button type="submit" className="bg-red-600 hover:bg-red-400 text-white px-6 py-2 rounded-lg">Search</button>
                        </form>

                    </div>
                </div>
            </section>
            <Showoffers/>
            <FeaturedRoots/>
            <Reviews/>
            <Busservices/>
            <Faq/>
        </>
    );
}
export default Home;
