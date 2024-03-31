/* import React, { useEffect } from 'react'
import { useSelector }  from 'react-redux'*/


function Home() {
/* 
    const username = localStorage.getItem('username')

    const user = useSelector((store) => store.authReducer.user)

    useEffect(() => {
        if(!user && !!localStorage.getItem('token')) {
            
        }
        
        console.log(user)
    }, [user]) */

    return (
        <>
            <main className='h-screen w-full'>
                <div className='flex justify-center'>
                    <img src="homebank.png" className='w-1/2 ' />
                    <section className='w-1/2 bg-white p-10 text-right'>
                        <h1 className='text-3xl font-bold mb-5'>Welcome to ByteBank</h1>
                        <p>Welcome to our online banking platform! With our homebanking service, managing your finances has never been easier. Whether you re checking your account balance, paying bills, or transferring funds, our secure and convenient platform puts all the tools you need right at your fingertips.
                            <br />
                            With our user-friendly interface, you can access your accounts from anywhere, at any time. Rest assured that your financial information is protected by advanced security measures, ensuring a safe and reliable banking experience.
                            <br />
                            Take control of your finances today with our homebanking service. Sign up now and discover the convenience of banking from the comfort of your own home.
                        </p>
                    </section>
                </div>
            </main>
        </>
    )
}

export default Home