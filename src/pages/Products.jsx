import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Product from '../components/Product'
import Loader from '../components/Loader'

import { useStore } from '../store/StoreContext'

const Products = () => {

  const { products, isLoading, handleAddProduct } = useStore()

  console.log('products context')
    
  const renderData = () => (
    <div>
      {
        products.map((product) => 
          <div key={product.id}>
            <Link to={`/products/${product.id}`} className='flex flex-col w-1/2 '>
              <Product key={product.id} product={product} />
            </Link>
            <button className='p-2 mt-4 ml-10 text-white bg-blue-400'
              onClick={() => handleAddProduct(product)}
            >Add to Cart
            </button>
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

export default Products