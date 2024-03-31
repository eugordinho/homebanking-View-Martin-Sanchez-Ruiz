import React from 'react'
import { Anchor } from './Anchor'
import { LINKS_NAV } from '../utils/LINKS_NAV'
import { LINKS_NAV_NO_AUTH } from '../utils/LINKS_NAV_NO_AUTH'
import { useSelector, useDispatch } from 'react-redux'
import actions from "../redux/actions/auth.actions";
import { Navigate, useNavigate } from 'react-router-dom'

export const Header = () => {

    const user = useSelector(store => store.authReducer.user)
    const token = localStorage.getItem("token")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(actions.logout());
        navigate("/login");
        
    };

    return (
        <header className='flex w-full gap-5 justify-between bg-blue-400 lg:flex-row lg:p-5'> 
            <div className='w-1/2 p-3 flex items-center gap-3'>
                <img src="banco.png" alt="bank logo" className='w-20 ml-4'/>
                <h1 className='text-3xl font-bold text-white'>BYTEBANK</h1>
            </div>  
            <div className='flex justify-between p-5 items-center'>
                <nav className='flex gap-5'>
                    { token ? (
                        <>
                            {LINKS_NAV.map(e => <Anchor href={e.href} key={e.href} className="">{e.name}</Anchor>)}
                            <button className='bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded' onClick={handleLogout}>Logout</button>
                        </>
                    ) : (
                        LINKS_NAV_NO_AUTH.map(e => <Anchor href={e.href} key={e.href} className="">{e.name}</Anchor>)
                    )}
                </nav>
            </div>
        </header>
    )
}