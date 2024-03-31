import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const NewAccount = () => {

    const navigate = useNavigate()

    const handleAccount = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")

        axios.post("/api/clients/current/accounts", {}, {   
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            console.log(response.data)
            
        })
        .catch(error => {
            console.log(error.response.data)
        })
        navigate("/accounts")
    }

    return (
        
        <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5' >
            <div className='w-4/5 bg-white h-full p-8 border-2 border-blue-400 flex flex-col gap-5'>
            <h1 className='font-bold text-2xl'>Terms and Conditions for Opening a New Bank Account:</h1>
            <p>By opening an account with us, you agree to the following terms and conditions:</p>
            <ul className='list-disc'>
                <li><span className="font-bold">Eligibility:</span> You must meet the eligibility requirements set by the bank to open an account, including, but not limited to, minimum age requirement and providing valid identification documents.</li>
                <li><span className="font-bold">Personal Information: </span> When opening an account, you provide accurate and complete personal information, including your full name, address, phone number, and valid identification details.</li>
                <li><span className="font-bold">Account Usage: </span> The account must be used only for lawful and legitimate purposes. The bank reserves the right to close the account if suspicious or fraudulent activity is detected.</li>
                <li><span className="font-bold">Liability and Security: </span> You are responsible for maintaining the security of your account information, including passwords and access details. Any activity performed on your account will be considered as done by yourself.</li>
                <li><span className="font-bold">Fees and Charges: </span> You acknowledge and agree to any fees or charges associated with the maintenance and use of the account, as set by the bank. These charges may include service fees, overdraft fees, among others.</li>
                <li><span className="font-bold">Information Disclosure: </span> You agree that the bank may disclose your personal information and account details as required by applicable laws and regulations, as well as for transaction processing and provision of banking services.</li>
                <li><span className="font-bold">Terms Modifications: </span> The bank reserves the right to modify these terms and conditions at any time, with proper notice to account holders. Continued use of the account after modification will be considered as acceptance of the new terms.</li>
                </ul>
            <p>By opening an account with us, you agree to these terms and conditions and commit to comply with them at all times.</p>
            <button type="submit" className='border-2 p-2 w-1/4 border-blue-700 bg-blue-400 text-white font-bold' onClick={handleAccount}>Request</button>
            </div>
        </main>
    )
}

export default NewAccount
