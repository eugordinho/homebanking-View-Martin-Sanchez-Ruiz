import { useEffect, useState }  from 'react'
import axios from 'axios'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function Cards() {

    const [cards, setCards] = useState([])

    useEffect(()=>{
        axios("http://localhost:8080/api/cards")
        .then( response => setCards(response.data))
        .catch( e => console.log(e))
    },[])
    console.log(cards)

    return (
        <>
            <Header />
                <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
                    <h1 className='font-bold text-2xl'>Your cards</h1>
                    {
                        cards.map( card => <div key={cards.id} style={{ background: `url(/${card.color}.png)`, backgroundSize: 'contain' }} className='w-1/4 h-52 flex flex-col justify-end font-bold text-gray-600 p-5'> 
                                    <p>{ card.number }</p>
                                    <p>{ card.cardHolder}</p>
                            <p>VALID { card.thruDate }</p>
                        </div>) 
                    }

                    <div className='flex flex-col w-full justify-center items-center gap-5'>
                        <h2 className='text-2xl'>Get a new card</h2>

                        <div className='rounded border-2 border-blue-700 border-solid p-5 flex flex-col gap-3 w-1/3 h-52 justify-center items-center'>
                            <fieldset className='flex gap-3'>Select card type: 
                                <select name="" id="" className='w-32'>
                                    <option value="">Card type</option>
                                    <option value="">DEBIT</option>
                                    <option value="">CREDIT</option>
                                </select>
                            </fieldset>

                            <fieldset className='flex gap-3'>Select card color:
                                <select name="" id="" className='w-32'>
                                    <option value="">Card color</option>
                                    <option value="">GOLD</option>
                                    <option value="">PLATINUM</option>
                                    <option value="">SILVER</option>
                                </select>

                            </fieldset>

                            <button className='rounded border-2 border-blue-700 border-solid p-3 bg-blue-700 text-white w-1/2'>Solicitar</button>
                        </div>
                    </div>
                </main>
            <Footer />
        </>
    )
}

export default Cards