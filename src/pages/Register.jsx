import React from 'react'

function Register() {
    return (
        <section className="className='w-full flex h-screen m-auto justify-center items-center flex-col">
            <form action="" className="flex flex-col gap-4 w-1/3 bg-white p-10 rounded-2xl">
                <h1 className='text-3xl text-center font-bold mb-5 text-lg text-gray-700 font-sans'>Register</h1>
                <input type="text" placeholder="Name" className='p-1 border '/>
                <input type="text" placeholder="Email" className='p-1 border '/>
                <input type="text" placeholder="Password" className='p-1 border '/>
                <input type="text" placeholder="Confirm Password" className='p-1 border '/>
                <input type="submit" value="Register" />
                <p className='text-center text-sm'>Already have an account? <a href="/login" className=' text-xsfont-bold text-blue-500'>Login</a></p>

            </form>
        </section>
    )
}

export default Register