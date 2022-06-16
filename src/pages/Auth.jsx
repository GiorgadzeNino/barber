import Product from '../components/Product'
import { useStore } from '../store/StoreContext'
import { useForm } from 'react-hook-form'
import styles from './styles.css'

const Auth = () => {

    const { handleCheckUser } = useStore()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = user => {
        console.log(user)
        handleCheckUser(user)
    }
    // console.log(watch('example')) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('email', { required: true })} placeholder='email' />
            <input {...register('password', { required: true })} placeholder='password' />
            <input type='submit' />

        </form>
    )
}



export default Auth