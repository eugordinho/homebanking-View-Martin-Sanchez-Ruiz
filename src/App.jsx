/* import { useState } from 'react' */
import { MainLayout } from "./layouts/MainLayout"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Cards from './pages/Cards'

const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/cards" element={<Cards />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
