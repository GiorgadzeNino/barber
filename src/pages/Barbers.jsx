import React from 'react'
import { Link } from 'react-router-dom'

import Barber from '../components/Barber'

import { useStore } from '../store/StoreContext'

const Barbers = () => {

    const { barbers } = useStore()

    console.log('products context')

    const renderData = () => (
        <div className='justify-content-center flex flex-wrap'>
            {
                barbers ? barbers?.map((barber) =>
                    <div key={barber.id}>
                        <Link to={`/barber/${barber.id}`} className='flex flex-wrap w-1/2'>
                            <Barber key={barber.id} barber={barber} />
                        </Link>
                    </div>
                ) :
                    null
            }
        </div>
    )


    const renderContent = () => (
        <>
            {renderData()}
        </>
    )

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {renderContent()}
        </div>
    )
}

export default Barbers