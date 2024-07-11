import React from 'react'

function Reviews() {
    return (
        <>
            <section className="bg-gray-100 py-12 mt-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 mb-4">"My recent trip with Yesgobus was great! The bus arrived on time, and the staff were friendly and helpful. The onboard amenities, including charging ports and free Wi-Fi, were a nice touch. "</p>
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold">Dinesh Nakkina</h4>
                                    <p className="text-gray-600">Hyderbad, INDIA</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 mb-4">"I had an excellent experience traveling with Greyhound from Visakhapatnam to Bangalore. The bus was clean, the seats were comfortable, and the Wi-Fi worked perfectly throughout the trip. "</p>
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold">Meghana Shetty</h4>
                                    <p className="text-gray-600">Visakhapatnam, INDIA</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <p className="text-gray-700 mb-4">"My experience with YesgoBus was a mixed bag. The bus itself was modern and the seats were fairly comfortable. However, the air conditioning was set too high, making the ride quite chilly."</p>
                            <div className="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Customer" className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold">Imran Hussain</h4>
                                    <p className="text-gray-600">Mumbai, INDIA</p>
                                </div>
                            </div>
                        </div>
                        {/* Repeat similar blocks for other reviews */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Reviews