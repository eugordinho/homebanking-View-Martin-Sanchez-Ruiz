import { useEffect, useState }  from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'


function Cards() {

/*     const [cards, setCards] = useState([])

    useEffect(()=>{
        axios("http://localhost:8080/api/cards")
        .then( response => setCards(response.data))
        .catch( e => console.log(e))
    },[]) */
    const user = useSelector(store => store.authReducer.user)

    console.log(user.cards)

    return (
        <>

                <main className='min-h-screen w-full flex items-center flex-col gap-7 p-5'>
                    <h1 className='text-2xl rounded-2xl border-blue-700 bg-blue-400 text-white font-bold p-5'>Your cards</h1>
                    {
                        user.cards?.map( card => <div key={user.cards.id} style={{ background: `url(/${card.color}.png)`, backgroundSize: 'contain' }} className='w-1/4 h-52 flex flex-col justify-end font-bold text-gray-600 p-5'> 
                                    <p>{ card.number }</p>
                                    <p>{ card.cardHolder}</p>
                            <p>VALID { card.thruDate }</p>
                        </div>) 
                    }

                    <a className='text-2xl rounded-2xl border-blue-700 bg-blue-400 text-white font-bold p-2' href='/newcard'>Get a new card!</a>

                    
                    
                </main>

        </>
    )
}

export default Cards