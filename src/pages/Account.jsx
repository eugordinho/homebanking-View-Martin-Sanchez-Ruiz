import { useEffect, useState }  from 'react'
import Accounts from '../components/Accounts'
import { useDispatch, useSelector } from 'react-redux'
import AccountDetail from './AccountDetails'

function Account() {

  const user = useSelector(store => store.authReducer.user)

  if(!user.accounts) {
    return <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'/>
  }

  return (
    <>
        <main className='min-h-screen w-full flex flex-col items-center gap-7 p-5'>
          <h1 className='font-bold text-2xl border-blue-700 bg-blue-400 text-white p-5 rounded-xl'>Welcome, {user.firstName} {user.lastName}!</h1>
            <div className='flex flex-col gap-5 w-full max-w-4xl'>
              {
                  user.accounts?.map( account => <Accounts key={account.id} number={account.number} amount={account.balance} creationDate={account.creationDate}/>) 
                  /* user.accounts?.map(account => <AccountDetail key={account.id} number={account.number} balance={account.balance} creationDate={account.creationDate} id={account.id} /> ) */
              }
            </div>

            <div className='flex flex-col items-center gap-5'>
              <a className='text-2xl rounded-2xl border-blue-700 bg-blue-400 text-white font-bold p-2' href="/newaccount">Request a new account</a>
              

            </div>
        </main>
    
    </>
  )
}

export default Account