import React, { useState } from 'react'
import { useEffect } from 'react'
import { Route, Link, Routes, useParams } from 'react-router-dom'
import { useStore } from '../store/StoreContext'
import Loader from '../components/Loader'
import Barbers from '../pages/Barbers'
import { useForm } from 'react-hook-form'

const BarberDetails = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const { users, booked, isLoading, handleBookBarber, handleAddReview } = useStore()
    const [barber, setBarber] = useState()
    const [message, setMessage] = useState('')
    const [reviewCount, setReviewCount] = useState()

    const params = useParams()

    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    const handleClick = (count) => {
        setReviewCount(count)
    }


    console.log(params); // 👉️ {userId: '4200'}

    useEffect(() => {
        const activeBarber = users.find((item) => item.id == params.barberId)
        setBarber(activeBarber)
        console.log(activeBarber)
        console.log(barber)
    }, [params.barberId, booked])

    const renderContent = () => (
        <>
            {isLoading ? <Loader /> : renderData()}
        </>
    )

    const renderData = () => (
        <>
            <div className='flex items-center px-2 py-4 m-2 rounded-lg cursor-pointer'>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdQiBbxs1JnmanQQ-U78fYhoe_uh6THzoGQ&usqp=CAU"
                    className='w-40 h-40 rounded-lg' alt='barber Photo' />
                <div className='flex flex-col justify-between w-full ml-10'>
                    <div className="font-bold text-xl mb-2">{barber?.firstname} {barber?.lastname}</div>
                    <div>{barber?.email}</div>
                    <div>{barber?.address}</div>
                    <div>{barber?.price}</div>
                    <div>{barber?.review}</div>

                    {Array.apply(0, Array(barber?.review)).map(function (x, i) {
                        return '★'
                    })}

                </div>

                {
                    barber?.reviewsList?.map((item) => { item })
                }

            </div>

            <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                onClick={() => handleBookBarber(barber)}>Book</button>
            {
                renderReview()
            }
        </>
    )


    const renderReview = () => (
        <>
            {barber?.isBooked ? renderReviewData() : <div></div>}
        </>
    )

    const renderReviewData = () => (
        <>
            <div className='flex justify-content-center'>
                {Array.apply(0, Array(barber?.review)).map(function (x, i) {
                    return <div key={i} value={i} className='star' onClick={() => handleClick(i)}>☆</div>
                })}
            </div>
            <div className='flex items-center justify-between  md:mr-2 md:mb-0 mb-2'>

                <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='review'>
                    Review
                </label>
                <textarea
                    {...register('review', { required: true, maxLength: 20 })}
                    className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border
             rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                    id='review'
                    type='text'
                    placeholder='review'
                    onChange={handleChange}
                />
            </div>

            <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                onClick={() => handleAddReview(barber, message, reviewCount)}>Add review</button>
        </>
    )

    return (
        <>
            {renderContent()}
        </>
    )
}

export default BarberDetails