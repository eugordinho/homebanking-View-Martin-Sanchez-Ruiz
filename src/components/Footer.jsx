import React from 'react'


export const Footer = () => {
    return (
        <footer className='font-bold p-5 bg-blue-400 flex justify-center justify-evenly w-full'>
            <p className=''>© 2024 ByteBank S.A. - All rights reserved.</p>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-3'>
                    <img src="instagram.png" alt="" className='w-6'/>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
                <div className='flex gap-3'>
                    <img src="gorjeo.png" alt="" className='w-6'/>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className='flex gap-3'>
                    <img src="facebook.png" alt="" className='w-6'/>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    )
}