import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

function MainLayout(props) {
    return (
        <div className="bg-[#1F2937]">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default MainLayout