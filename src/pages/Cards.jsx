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
                    {
                        cards.map( card => <div key={cards.id} style={{ background: `url(/${card.color}.png)`, backgroundSize: 'contain' }} className='w-1/4 h-52 flex flex-col justify-end font-bold text-gray-600 p-5'> 
                                    <p>{ card.number }</p>
                                    <p>{ card.cardHoleder}</p>
                            <p>VALID { card.thruDate }</p>
                        </div>) 
                    }
                </main>
            <Footer />
        </>
    )
}

export default Cards