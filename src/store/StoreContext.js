import React, { useContext, useState } from 'react'
import userList from '../dummyData/data.json'
import { useNavigate } from 'react-router-dom'

export const StoreContext = React.createContext()

export const useStore = () => useContext(StoreContext)


const StoreProvider = ({ children }) => {
  const [userType, setUserType] = useState('consumer')
  const [users, setUsers] = useState(userList)
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [booked, setBooked] = useState()
  const [barbers, setBarbers] = useState(
    () => {
      const barb = []
      userList.map(
        (item) => {
          item.userType === 'barber' ? barb.push(item) : null
        }
      )
      return barb
    }
  )

  const navigate = useNavigate()
  const handleChooseUser = (event) => {
    console.log(event.target.value)
    setUserType(event.target.value)
  }

  const handleBookBarber = (barber) => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      const index = users.findIndex((item) => item.id == barber.id)
      const newData = users
      newData[index].isBooked = true
      setUsers(newData)
      setBooked(true)
      console.log(users)
    } else {
      navigate('/auth/signin')
    }
  }

  const handleAddReview = (barber, message, star) => {
    console.log(message)
    const index = users.findIndex((item) => item.id == barber.id)
    const newData = users
    newData[index].review = star
    newData[index].reviewsList.push(message)
    setUsers(newData)
    console.log(users)

  }
  const handleAddUser = (user) => {
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
    console.log(products)
    setUsers((prev) => [...prev, newUser])
    navigate('/barbers')

  }

  const handleCheckUser = (user) => {
    console.log(user)
    const newBarbers = []
    users.forEach((element) => {
      if (element.userType === 'barber') {
        newBarbers.push(element)
      }
    })

    navigate('/barbers')
    setBarbers(newBarbers)
    console.log(barbers)
    const data = users

    const person = data.find((item) => (item.email === user.email && item.password === user.password))
    // save email to localStorage
    if (person?.userType == 'consumer') {
      localStorage.setItem('email', person.email)
      setisAuthenticated(true)
    }
    console.log(isAuthenticated)
  }

  const isLoggedIn = () => {
    return !!localStorage.getItem('email')
  }

  const logout = () => {
    setisAuthenticated(false)
    localStorage.clear()
    navigate('/auth/signin')
  }

  const globalState = {
    userType,
    users,
    barbers,
    booked,
    isAuthenticated,
    handleChooseUser,
    handleAddUser,
    handleCheckUser,
    isLoggedIn,
    handleBookBarber,
    handleAddReview,
    logout

  }

  return (
    <StoreContext.Provider value={globalState}>
      {children}
    </StoreContext.Provider>
  )
}


export default StoreProvider