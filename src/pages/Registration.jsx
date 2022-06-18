import { useStore } from '../store/StoreContext'
import { useForm } from 'react-hook-form'

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
                    <div className='container mx-auto'>
                        <div className='flex justify-center px-6 my-12'>
                            {/* <!-- Row --> */}
                            <div className='py-4 px-4 w-full xl:w-3/4 lg:w-11/12 flex'>
                                {/* <!-- Col --> */}
                                <div
                                    className='bgr-img w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
                                // style='background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')'
                                ></div>
                                {/* <!-- Col --> */}
                                <div className='px-4 py-4 w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>
                                    {/* <h3 className='pt-4 text-2xl text-center'>Create an Account!</h3> */}
                                    {/* <form className='px-8 pt-6 pb-8  bg-white rounded'> */}
                                    <div className=' md:flex md:justify-between'>
                                        <div className='flex items-center justify-between  md:mr-2 md:mb-0 mb-2'>
                                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='firstname'>
                                                First Name
                                            </label>
                                            <input
                                                {...register('firstname', { required: true, maxLength: 20 })}
                                                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border
                                                 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                id='firstname'
                                                type='text'
                                                placeholder='First Name'
                                            />
                                        </div>
                                        <div className='md:ml-2 flex items-center justify-between mb-2'>
                                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='lastname'>
                                                Last Name
                                            </label>
                                            <input
                                                {...register('lastname', { required: true })}
                                                className='w-full px-3 py-2 text-sm leading-tight text-gray-700 border
                                                 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                id='lastname'
                                                type='text'
                                                placeholder='Last Name'
                                            />
                                        </div>
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
                                            Email
                                        </label>
                                        <input
                                            {...register('email', { required: true })}
                                            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border
                                             rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                            id='email'
                                            type='email'
                                            placeholder='Email'
                                        />
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='address'>
                                            Address
                                        </label>
                                        <input
                                            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border
                                             rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                            id='address'
                                            type='text'
                                            placeholder='address'
                                            {...register('address', { required: true })}

                                        />
                                    </div>
                                    <div className=' flex items-center justify-between'>
                                        <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='price'>
                                            Price
                                        </label>
                                        <input
                                            {...register('price', { required: true })}
                                            className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border
                                             rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                            id='price'
                                            type='text'
                                            placeholder='price'
                                        />
                                    </div>
                                    <div className='md:flex md:justify-between'>
                                        <div className='flex items-center justify-between  md:mr-2 md:mb-0 mb-2'>
                                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='password'>
                                                Password
                                            </label>
                                            <input
                                                {...register('password', { required: true })}
                                                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border
                                                 border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                id='password'
                                                type='password'
                                                placeholder='******************'
                                            />
                                            {/* <p className='text-xs italic text-red-500'>Please choose a password.</p> */}
                                        </div>
                                        {/* <div className='flex items-center justify-between md:ml-2'>
                                            <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='c_password'>
                                                Confirm Password
                                            </label>
                                            <input
                                                className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border 
                                                rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                                id='c_password'
                                                type='password'
                                                placeholder='******************'
                                            />
                                        </div> */}
                                    </div>
                                    <div className='mb-6 text-center'>
                                        <button
                                            className='mt-4 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full 
                                            hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                                            type='submit'
                                        >Register Account</button>
                                    </div>
                                    <hr className='mb-6 border-t' />

                                    <div className='text-center'>
                                        <a
                                            className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                                            href='./index.html'
                                        >
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                    {/* </form> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* </body> */}
                    {/* </body> */}
                </div>
                : <div className='container mx-auto'>
                    <div className='flex justify-center px-6 my-12'>
                        {/* <!-- Row --> */}
                        <div className='py-4 px-4 w-full xl:w-3/4 lg:w-11/12 flex'>
                            {/* <!-- Col --> */}
                            <div
                                className='bgr-img w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg'
                            // style='background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')'
                            ></div>
                            {/* <!-- Col --> */}
                            <div className='px-4 py-4 w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none'>

                                {/* <input {...register('email', { required: true })} placeholder='email' />
                    <input {...register('password', { required: true })} placeholder='password' type='password' /> */}
                                <div className=' flex items-center justify-between'>
                                    <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='email'>
                                        Email
                                    </label>
                                    <input
                                        {...register('email', { required: true })}
                                        className='w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700
                             border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                        id='email'
                                        type='email'
                                        placeholder='Email'
                                    />
                                </div>
                                <div className=' flex items-center justify-between'>
                                    <label className='block mb-2 text-sm font-bold text-gray-700' htmlFor='password'>
                                        Password
                                    </label>
                                    <input
                                        {...register('password', { required: true })}
                                        className='w-full px-3 py-2 mb-3 text-sm leading-tight
                             text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
                                        id='password'
                                        type='text'
                                        placeholder='Password'
                                    />
                                </div>
                                <div className='mb-6 text-center'>
                                    <button
                                        className='mt-4 w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full 
                                        hover:bg-blue-700 focus:outline-none focus:shadow-outline'
                                        type='submit'
                                    >Register Account</button>
                                </div>
                                <hr className='mb-6 border-t' />

                                <div className='text-center'>
                                    <a
                                        className='inline-block text-sm text-blue-500 align-baseline hover:text-blue-800'
                                        href='./index.html'
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
    // console.log(watch('example')) // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='userType flex items-center' onChange={(e) => {
                handleChooseUser(e) // react hook form onChange
            }}>
                <div className='flex items-center'>
                    <input type='radio' {...register('userType')} value='consumer' name='userType' id='consumer' className='mt-2' defaultChecked />
                    <label htmlFor='consumer'>consumer</label>
                </div><div className='flex items-center px-4'>
                    <input type='radio' {...register('userType')} value='barber' name='userType' id='barber' className='mt-2' />
                    <label htmlFor='barber'>barber</label>
                </div>
            </div>
            {renderContent()}

            {/* <input type='submit' /> */}

        </form>
    )
}



export default Registration