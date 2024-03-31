import React , { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import authActions from '../redux/actions/auth.actions'
import { useNavigate } from 'react-router-dom'

function Login() {

    const { login } = authActions

    const navigate = useNavigate()

    const [userData, setUserData] = useState({email: '', password: ''})

    const dispatch = useDispatch()

    const handleLogin = async(e) =>{
        e.preventDefault()
        axios.post("/api/auth/login", userData)
        .then((res)=>{
            console.log( res.data )
            dispatch(login(res.data))
            navigate("/accounts")
        })
        .catch( res => console.log(res))
    }

    const handleInput = (e) =>{
        setUserData({ ...userData, [e.target.name]: e.target.value})
    }
    

    return (
        <>

            <section className='w-1/2 flex h-screen m-auto justify-center items-center flex-col'>
                <form action="" className='flex flex-col gap-4 w-2/3 m-auto mt-20 py-10 px-5 shadow rounded bg-white text-center text-lg text-gray-700 rounded-2xl' onSubmit={handleLogin}>
                    <h1>Please login to your account</h1>
                    <input type="text" placeholder="Username" name='email' className='p-1 border rounded-xl' onChange={handleInput}/>
                    <input type="password" placeholder="Password" name='password' className='p-1 border rounded-xl' onChange={handleInput}/>
                    <button type="submit" value="Login" className='p-1 border rounded-xl bg-blue-400 text-white transition-shadow'>Login</button>
                    <a href="../register" className='text-xs'>Register</a>
                    <a href="#" className='text-xs'>Forgot Password?</a>

                </form>
            </section>
        </>
    )
}

export default Login