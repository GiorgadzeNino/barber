import Product from '../components/Product'
import { useStore } from '../store/StoreContext'
import { useForm } from 'react-hook-form'
import styles from './styles.css'

const Registration = () => {

    const { userType, users, handleChooseUser, handleAddUser } = useStore()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = user => {
        console.log(user)
        handleAddUser(user)
    }

    const renderContent = () => (

        <>
            {userType === 'barber' ?
                <div>
                    <input {...register('firstName', { required: true, maxLength: 20 })} placeholder='firstname' />
                    <input {...register('lastName', { required: true })} placeholder='lastName' />
                    <input {...register('email', { required: true })} placeholder='email' />
                    <input {...register('address', { required: true })} placeholder='address' />
                    <input {...register('price', { required: true })} placeholder='price' />
                    <input {...register('password', { required: true })} placeholder='password' type='password' />
                </div>
                : <div>
                    <input {...register('email', { required: true })} placeholder='email' />
                    <input {...register('password', { required: true })} placeholder='password' type='password' />
                </div>
            }
        </>
    )
    // console.log(watch('example')) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <select {...register('userType')}
                onChange={(e) => {
                    handleChooseUser(e) // react hook form onChange
                }}>
                <option value="consumer">consumer</option>
                <option value="barber">barber</option>
            </select>
            {renderContent()}

            <input type='submit' />

        </form>
    )
}



export default Registration