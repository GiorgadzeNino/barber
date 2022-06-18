import React from 'react'

const Barber = ({ barber }) => {
    console.log(barber)
    return (
        <div className='text-black px-2 py-4 m-2 rounded-lg cursor-pointer'>

            <div className="barber max-w-sm rounded overflow-hidden shadow-lg">
                <img
                    src="https://cdn4.vectorstock.com/i/1000x1000/53/48/trendy-barber-man-vector-35975348.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{barber.firstname} {barber.lastname}</div>
                    <div>{barber.email}</div>
                    <div>{barber.address}</div>
                    <div>{barber.price} ₾</div>
                </div>
                {/* <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div> */}
            </div>
        </div>
    )
}

export default Barber