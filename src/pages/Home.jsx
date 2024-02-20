import { useEffect, useState }  from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import axios from 'axios'
import Accounts from '../components/Accounts'
function Home() {
  
  const [accounts, setAccounts] = useState("")

  useEffect(()=>{
    axios("http://localhost:8080/api/accounts")
    .then( response => setAccounts(response.data))
    .catch( e => console.log(e))
  },[])
  console.log(accounts)

  

  return (
    <>
      <Header />
          <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
            <h1 className='font-bold text-xl'>Bienvenido MELBA!</h1>
            <div className='flex justify-evenly w-screen h-full'>
              {
                accounts.map( account => <Accounts key={account.id} number={account.number} amount={account.balance} creationDate={account.creationDate}/>)
              }
            </div>
          </main>
      <Footer />
    </>
  )
}

export default Home