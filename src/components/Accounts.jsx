import React from 'react'
import PropTypes from 'prop-types'

function Accounts( props ) {
  return (
    <a href=''>
      <div className='bg-blue-400 text-2xl p-5 flex flex-col font-bold gap-3'>
        <p>Account number: VIN-0000{props.number}</p>
        <p>Amount: </p>
        <p className='flex justify-center'>{props.amount}</p>
        <p>Creation date: {props.creationDate}</p>
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