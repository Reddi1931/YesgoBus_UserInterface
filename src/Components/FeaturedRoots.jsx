import React from 'react'

function FeaturedRoots() {
  return (
    <>
        <section className="bg-gray-100 py-12 mt-3">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Routes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Bangalore to Hyderabad</h3>
                            <p className="text-gray-700 mb-4">Starting from $25</p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400">Book Now</button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Hyderbad to Mumbai</h3>
                            <p className="text-gray-700 mb-4">Starting from $50</p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400">Book Now</button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Pune to Chennai</h3>
                            <p className="text-gray-700 mb-4">Starting from $40</p>
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-400">Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default FeaturedRoots