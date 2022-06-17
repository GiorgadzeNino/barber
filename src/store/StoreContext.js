import React, { useContext, useEffect, useReducer, useState } from 'react'
import { getAllProducts } from '../utils/services/products'
import userList from '../utils/services/data.json'
import Product from '../components/Product'
import { useNavigate } from 'react-router-dom'


export const StoreContext = React.createContext()

export const useStore = () => useContext(StoreContext)


const StoreProvider = ({ children }) => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [userType, setUserType] = useState('consumer')
  const [users, setUsers] = useState(userList)
  const [isAutheticated, setisAutheticated] = useState(false);

  const handleAddProduct = (product) => {
    setCart((prev) => [...prev, product])
  }
  const navigate = useNavigate()
  const handleChooseUser = (event) => {
    console.log(event.target.value)
    setUserType(event.target.value)
  }

  const handleAddUser = (user) => {
    console.log(user)
    const newUser = {
      id: users.length + 1,
      userType: user.userType,
      email: user.email,
      firstname: user.firstname ? user.firstname : null,
      lastname: user.lastname ? user.lastname : null,
      price: user.price ? user.price : null,
      address: user.address ? user.address : null,
      password: user.password
    }
    console.log(newUser)
    setUsers((prev) => [...prev, newUser])
    console.log(users)

    // navigate('/barbers')
    console.log(users)
    console.log(products)
    console.log(cart)

    // return <Navigate push to='/cart' />
  }

  const handleCheckUser = (user) => {
    console.log(user)
    const data = users
    console.log(data)

    const person = data.find((item) => (item.email === user.email))
    // save email to localStorage
    console.log(isAutheticated)
    console.log(person)
    if (person?.userType == 'consumer') {
      localStorage.setItem('email', person.email)
      setisAutheticated(true)
    }
    console.log(isAutheticated)
  }

  const isLoggedIn = () => {
    return !!localStorage.getItem('email')
  }

  const logout = () => {
    setisAutheticated(false)
    console.log('loggedInUser:' + isAutheticated)
  }
  useEffect(() => {
    const getProducts = async () => {
      setIsLoading(true)
      try {
        const data = await getAllProducts()
        setProducts(data.data)
        setIsLoading(false)
      } catch (err) {
        console.log('Error occured', err)
        setIsLoading(false)
      }
    }

    getProducts()
  }, [])

  const globalState = {
    products,
    cart,
    isLoading,
    handleAddProduct,
    userType,
    users,
    handleChooseUser,
    handleAddUser,
    handleCheckUser,
    isLoggedIn
  }

  return (
    <StoreContext.Provider value={globalState}>
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider