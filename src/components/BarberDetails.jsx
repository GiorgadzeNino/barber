import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '../store/StoreContext'
import { useForm } from 'react-hook-form'

const BarberDetails = () => {
    const { register, isAuthenticated } = useForm()
    const { users, handleBookBarber, handleAddReview } = useStore()
    const [barber, setBarber] = useState()
    const [message, setMessage] = useState('')
    const [changed, setChanged] = useState(false)

    const [reviewCount, setReviewCount] = useState()
    const stars = [1, 2, 3, 4, 5]
    const params = useParams()

    const handleChange = (event) => {
        setMessage(event.target.value)
    }
    const handleClick = (count) => {
        console.log(count)
        setReviewCount(count)
        setChanged(true)
    }
    const handleAdd = () => {
        const activeBarber = users.find((item) => item.id == params.barberId)
        setBarber(activeBarber)
        console.log(barber)
        handleAddReview(barber, message, reviewCount)
        setChanged(true)
    }

    useEffect(() => {
        const activeBarber = users.find((item) => item.id == params.barberId)
        setBarber(activeBarber)
        setChanged(false)
    }, [changed])

    const renderContent = () => (
        <>
            {renderData()}
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

                    {Array.apply(0, Array(barber?.review)).map(() => {
                        return '★'
                    })}

                </div>

                <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                    onClick={() => handleBookBarber(barber)} disabled={isAuthenticated}>Book</button>

            </div>
            <div className='reviews'>
                {
                    barber && barber.reviewsList.length ? barber?.reviewsList.map(
                        (item, i) => <div key={i}>{item}</div>
                    ) : null
                }
            </div>
            <div className='w-full flex justify-content-center'>
                <div className='width'>
                    {
                        renderReview()
                    }
                </div>
            </div>
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
                {stars.map((value, i) => {
                    return value <= reviewCount ?
                        <div key={i} value={value} className='star' onClick={() => handleClick(value)}>★</div> :
                        <div key={i} value={value} className='star' onClick={() => handleClick(value)}>☆</div>
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
            <div className='flex justify-content-center'>
                <button className='z-50 p-2 mt-4 text-white bg-blue-500 rounded-lg w-28'
                    onClick={() => handleAdd()}>Add review</button>
            </div>
        </>
    )

    return (
        <>
            {renderContent()}
        </>
    )
}

export default BarberDetails