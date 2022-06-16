import Product from '../components/Product'
import { useStore } from '../store/StoreContext'

const Cart = () => {

  const { cart } = useStore()

  const renderData = () => (
    <>
      {
        cart.map((product) => 
          <div className='w-1/2' key={product.id}>
            <Product key={product.id} product={product} />
          </div>
        )}
    </>
  )

    
  const renderContent = () => (
    <>
      {cart.length === 0 ? <p className='mt-10'>Cart is empty</p>: renderData()}
    </>
  )
  return (
    <div className='flex flex-col flex-wrap items-center w-full'>
      {renderContent()}
    </div>
  )
}

export default Cart