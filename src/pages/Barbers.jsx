import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Barber from '../components/Barber'
import Loader from '../components/Loader'

import { useStore } from '../store/StoreContext'

const Barbers = () => {

    const { users, isLoading, handleAddProduct } = useStore()

    console.log('products context')

    const renderData = () => (
        <div className='flex flex-wrap'>
            {
                users.map((item) =>
                    <div key={item.id}>
                        <Link to={`/products/${item.id}`} className='flex flex-col w-1/2'>
                            <Barber key={item.id} barber={item} />
                        </Link>
                    </div>
                )
            }
        </div>
    )


    const renderContent = () => (
        <>
            {isLoading ? <Loader /> : renderData()}
        </>
    )

    return (
        <div className='flex flex-col flex-wrap items-center w-full'>
            {renderContent()}
        </div>
    )
}

export default Barbers