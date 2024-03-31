import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

export const NewCard = () => {
    const [cards, setCards] = useState({
        type: '',
        color: ''
    })
    const navigate = useNavigate()

    const handleInput = (e) => {
        setCards({ ...cards, [e.target.name]: e.target.value })
    }

    const handleAccount = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")

        axios.post("/api/clients/current/cards", cards, {   
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log(response.data)
            navigate("/cards")
        })
        .catch(error => {
            console.log(error.response.data)
        })
        
    }
    
    return (

        <main className='flex flex-col justify-center items-center h-screen '>
            <div className='flex flex-col items center justify-evenly w-1/3 gap-5 text-xl bg-white p-8 rounded-xl h-1/2 border'>
                <fieldset className='flex gap-5'>Select card type: 
                <select name="type" id="" className='w-32' onChange={handleInput}VIN0937900VIN0937900>
                    <option value="">Card type</option>
                    <option value="debit">DEBIT</option>
                    <option value="credit">CREDIT</option>
                </select>
                </fieldset>

                <fieldset className='flex gap-3'>Select card color:
                    <select name="color" id="" className='w-32' onChange={handleInput}>
                        <option value="">Card color</option>
                        <option value="gold">GOLD</option>
                        <option value="platinum">PLATINUM</option>
                        <option value="silver">SILVER</option>
                    </select>

                </fieldset>

                <button className='rounded-3xl border-2 border-blue-700 border-solid p-3 bg-blue-700 text-white w-1/2' onClick={handleAccount}>Request</button>                     
            </div>

        </main>
    )
}