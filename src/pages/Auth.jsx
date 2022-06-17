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
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <input {...register('email', { required: true })} placeholder='email' />
        //     <input {...register('password', { required: true })} placeholder='password' />
        //     <input type='submit' />

        // </form>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3
                 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Username"
                    {...register('email', { required: true })} />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red-500 
                rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password" type="password" placeholder="******************"
                    {...register('password', { required: true })} />
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
                 focus:outline-none focus:shadow-outline" type="submit">
                    Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
    )
}



export default Auth