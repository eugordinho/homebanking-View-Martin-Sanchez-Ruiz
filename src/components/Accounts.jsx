import React from 'react'
import PropTypes from 'prop-types'

function Accounts( props ) {
  return (
    <a href=''>
      <div className='bg-white rounded-xl shadow-md p-5 flex flex-col gap-3'>
        <p className='text-xl font-bold'>Account number: {props.number}</p>
        <p className='text-xl font-bold'>Amount:</p>
        <p className='text-xl font-bold text-right text-green-700'>${props.amount}</p>
        <p className='text-xl font-bold'>Creation date: {props.creationDate}</p>
      </div>
    </a>  
  )
}

Accounts.protoTypes = {
  number: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  creationDate: PropTypes.node
}

export default Accounts