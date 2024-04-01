import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
/* import { Navigate, useNavigate } from 'react-router-dom'
 */

const Transaction = () => {
    
    const user = useSelector(store => store.authReducer.user)

    const [transactions, setTransactions] = useState({
        amount: 0,
        description: "",
        numberCredit: "",
        numberDebit: "",
    })

    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false // Para usar formato de 24 horas
    };

    const handleTransfer = () => {
        const token = localStorage.getItem("token")

        axios.post("api/clients/current/transactions", transactions, {
            headers: {
                Authorization: "Bearer " + token
            }})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.response.data)
            })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTransactions({
            ...transactions,
            [name]: value
        });
    };

    return (
        <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
                <h1 className='text-2xl rounded-2xl border-blue-700 bg-blue-400 text-white font-bold p-5'>Transactions</h1>
            <div className='flex justify-evenly w-1/3 p-5 gap-5 h-full text-xl bg-white'>
                <form action="" className='flex flex-col gap-5 w-full'>
                    <fieldset className='border border-gray-300 rounded-md p-2'>
                        <legend className='text-lg font-semibold mb-2'>Origin account:</legend>
                        <select className='w-full border border-gray-300 rounded-md p-1 ' onChange={handleInputChange} name="numberDebit" value={transactions.numberDebit}>
                            {
                                user.accounts?.map(account => <option key={account.id} value={account.number}>{account.number}</option>)
                            }
                        </select>
                    </fieldset>

                    <fieldset className='border border-gray-300 rounded-md p-2'>
                        <legend className='text-lg font-semibold mb-2'>Amount:</legend>
                        <input type="number" placeholder="" className='w-full border border-gray-300 rounded-md p-1' onChange={handleInputChange} name="amount" value={transactions.amount}/>
                    </fieldset>

                    <fieldset className='border border-gray-300 rounded-md p-2'>
                        <legend className='text-lg font-semibold mb-2'>Destination account:</legend>
                        <select className='w-full border border-gray-300 rounded-md p-1' onChange={handleInputChange} name="numberCredit" value={transactions.numberCredit}>
                            {
                                user.accounts?.map(account => <option key={account.id} value={account.number}>{account.number}</option>)
                            }
                        </select>
                    </fieldset>

                    <fieldset className='border border-gray-300 rounded-md p-2'>
                    <legend className='text-lg font-semibold mb-2'>Description:</legend>
                    <input 
                        type="text" 
                        placeholder="Enter description" 
                        className='w-full border border-gray-300 rounded-md p-1'
                        name="description"
                        value={transactions.description}
                        onChange={handleInputChange}
                    />
                </fieldset>

                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-md w-[120px] self-start' onClick={handleTransfer}>Transfer</button>
                </form>
            </div>
            
            <table className='w-3/4 border border-gray-300'>
                <thead className='bg-gray-100'>
                    <tr className='text-left'>
                        <th className='px-4 py-2'>Transfer type</th>
                        <th className='px-4 py-2'>Amount</th>
                        <th className='px-4 py-2'>Description</th>
                        <th className='px-4 py-2'>Date</th>
                    </tr>
                </thead>
                <tbody className='bg-white'>
                    {
                        user.accounts?.map(account => 
                            account.transactions.map(transaction => {
                                const formattedDate = new Date(transaction.transactionDate).toLocaleString('en-US', options);
                                return (
                                    <tr key={transaction.id} className='border-t'>
                                        <td className='px-4 py-2'>{transaction.type}</td>
                                        <td className='px-4 py-2'>{transaction.amount}</td>
                                        <td className='px-4 py-2'>{transaction.description}</td>
                                        <td className='px-4 py-2'>{formattedDate}</td>
                                    </tr>
                                );
                            })
                        )
                    }
                </tbody>
            </table>
        </main>
    )
}

export default Transaction
