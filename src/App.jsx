import { useEffect } from 'react' 
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Cards from './pages/Cards'
import Loans from './pages/Loans'
import Account from './pages/Account'
import Home from './pages/Home'
import MainLayout from '../src/layouts/MainLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import './utils/axios.config.js'
import NewAccount from './pages/NewAccount.jsx'
import { NewCard } from './pages/NewCard.jsx'
import { useDispatch, useSelector } from 'react-redux'
import authActions from './redux/actions/auth.actions'
import axios from 'axios'
import { withAuth } from './hocs/withAuth.jsx'
import Transaction from './pages/Transaction.jsx'

const App = () => {

  const AccountsWithAuth = withAuth(Account)
  const CardsWithAuth = withAuth(Cards)
  const LoansWithAuth = withAuth(Loans)
  const TransactionsWithAuth = withAuth(Transaction)
  const NewAccountWithAuth = withAuth(NewAccount)
  const NewCardWithAuth = withAuth(NewCard)


  const user = useSelector(store => store.authReducer.user)

  const dispatch = useDispatch()

  const { current, login } = authActions

  useEffect(() => {

      const token = localStorage.getItem("token")

      if (!user.loggedIn && !!token) {
          axios.get('/api/clients/current', {
              headers: {
                  Authorization: "Bearer " + token
              }
          })
              .then(response => {
                  dispatch(current(response.data))
                  dispatch(login(token))
              })
              .catch(error => console.log(error.response.data))
      }
  }, [])


  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}/>  
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/*"
            element={
              <MainLayout>
                <Outlet />
              </MainLayout>
            }/>


          <Route path="/accounts" element={<AccountsWithAuth />}/>  
          <Route path="/cards" element={<CardsWithAuth />} />
          <Route path="/loans" element={<LoansWithAuth />} />
          <Route path="/newaccount" element={<NewAccountWithAuth />} />
          <Route path="/newcard" element={<NewCardWithAuth />} />
          <Route path="/transaction" element={<TransactionsWithAuth />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
