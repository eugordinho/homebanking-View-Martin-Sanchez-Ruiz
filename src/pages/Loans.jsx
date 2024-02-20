import { useEffect, useState }  from 'react'
import axios from 'axios'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function Loans() {

    const [loans, setLoans] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8080/api/clients/1")
        .then( response => setLoans(response.data))
        .catch( e => console.log(e))
    },[]
    )
    
    console.log( loans )

    return (
        <>
            <Header></Header>
                <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
                    <h1 className='font-bold text-2xl'>Your active loans</h1>
                    <div className='flex justify-evenly w-screen h-full text-xl '>    
                    {
                            loans.loans.map( loan => <div key={loan.id} className='rounded border-2 border-blue-700 border-solid p-7 gap-5'>
                            <p>Loan: {loan.name}</p>
                            <p>Amount: {loan.amount}</p>
                            <p>Payments: {loan.payments}</p>
                            </div> )    
                    }
                    </div>

                    <div className='flex flex-col w-full justify-center items-center gap-5 '>
                        <h2 className='text-2xl'>Get a new loan</h2>
                        <div className='rounded border-2 border-blue-700 border-solid p-5 flex flex-col gap-3 w-1/3 h-52 justify-center items-center'>
                            <fieldset className='flex gap-3'>Loan type 
                                <select name="" id="" className='w-32'>
                                    <option value="">Loan type</option>
                                    <option value="">Mortage</option>
                                    <option value="">Personal</option>
                                </select>
                            </fieldset>

                            <fieldset>Enter amount: 
                                <input type="text" className='border-2 border-gray-400'/>
                            </fieldset>

                            <fieldset className='flex gap-3'>Select payments:
                                <select name="" id="" className='w-32'>
                                    <option value="">Payments</option>
                                    <option value="">12</option>
                                    <option value="">24</option>
                                    <option value="">32</option>
                                </select>

                            </fieldset>

                            <button className='rounded border-2 border-blue-700 border-solid p-3 bg-blue-700 text-white w-1/2' type="submit">Solicitar</button>
                        </div>
                    </div>
                </main>

            <Footer></Footer>
        </>
    )
}

export default Loans