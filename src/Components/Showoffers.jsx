import React from 'react'
import {Link} from 'react-router-dom'
function Showoffers() {
  return (
    <>
        <section className='py-12'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-3xl font-medium text-gray-900 dark:text-white p-2'>Bus Booking Discount Offers</h1>
                    </div>
                    <div>
                        <Link to={"/offers"} href='#' className='text-red-600 px-6 py-2 rounded-lg hover:text-red-900 cursor-pointer'>view All</Link>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://static.abhibus.com/offerbanners/Mar2024/20/1710923417-apsrtc-bus-offer.webp" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://static.abhibus.com/offerbanners/Mar2024/20/1710924058-tsrtc-bus-offer.webp" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://static.abhibus.com/busgallery/offerbanners/Nov2023/24/1700820925-720x360-ixigo-au.png" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg hidden" src="https://static.abhibus.com/busgallery/offerbanners/Sep2023/05/1693913253-mobi-mob.webp" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg hidden" src="https://static.abhibus.com/busgallery/offerbanners/Sep2023/05/1693913253-mobi-mob.webp" alt="" />
                    </div>
                </div>
            </section>
    
    </>
  )
}

export default Showoffers