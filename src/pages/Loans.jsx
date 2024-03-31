import { useEffect, useState }  from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

function Loans() {
    
    const [loansType, setLoansType] = useState([])

/*     const [loans, setLoans] = useState([])

    useEffect( () => {
        axios.get("http://localhost:8080/api/clients/1")
        .then( response => setLoans(response.data))
        .catch( e => console.log(e))
    },[]
    )
    */
    useEffect( () => {
        axios.get("/api/loans")
        .then( response => setLoansType(response.data))
        .catch( e => console.log(e))
    },[]
    ) 
    const user = useSelector(store => store.authReducer.user)
    console.log(loansType)

    return (
        <>

            <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
                <h1 className='text-2xl rounded-2xl border-blue-700 bg-blue-400 text-white font-bold p-5'>Your active loans</h1>
                <div className='flex justify-evenly w-full h-full text-xl '>    
                {
                    user.loans?.map( loan => <div key={loan.id} className=' bg-blue-400 text-white font-bold rounded border-2 border-blue-700 border-solid p-7 gap-5 w-1/4'>
                    <p>Loan: {loan.name}</p>
                    <p>Amount: {loan.amount}</p>
                    <p>Payments: {loan.payments}</p>
                    </div> )    
                }
                </div>

                <div className='flex flex-col w-1/3 justify-center items-center gap-5 bg-white rounded border-2 border-blue-700  border-solid p-5'>
                    <h2 className='text-2xl'>Get a new loan</h2>
                    <div className=' p-5 flex flex-col gap-3 text-left'>
{/*                             <fieldset> Account: 
                            <select name="" id="">Account</select>
                            {

                            }
                        </fieldset> */}
                        <fieldset className='flex gap-3'>Loan type: 
                            <select name="" id="" className='w-32'>
                                <option value="">Loan type</option>
                                {
                                    /* loansType.map( loan => <option className="w-1/2" value={loan.name} key={loan.id}>{loan.name}</option>)  */
                                }
                            </select>
                        </fieldset>

                        <fieldset>Enter amount: 
                            <input type="number" className='border-2 border-gray-400 w-1/2'/>
                        </fieldset>

                        <fieldset className='flex gap-3'>Select payments:
                            <select name="" id="" className='w-32'>
                                <option value="">Payments</option>
                                {
                                    /* loansType.map( loan => loan.payments.map( payment=> <option value="" key={loan.id} className="w-1/2">{payment}</option>)) */
                                }
                            </select>

                        </fieldset>

                        <button className='rounded border-2 border-blue-700 border-solid p-3 bg-blue-700 text-white w-1/2' type="submit">Request</button>
                    </div>
                </div>
            </main>


        </>
    )
}

export default Loans