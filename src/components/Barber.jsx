import React from 'react'

const Barber = ({ barber }) => {
    return (
        <div className='text-white px-2 py-4 m-2 rounded-lg cursor-pointer'>
            <div>{barber.firstname} {barber.lastname}</div>
            <div>{barber.email}</div>
            <div>{barber.address}</div>
            <div>{barber.price}</div>
        </div>
    )
}

export default Barber