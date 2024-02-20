import React from 'react'
import PropTypes from 'prop-types'

function Accounts( props ) {
  return (
    <div className='bg-blue-400 w-1/3 h-52 text-2xl p-3 flex flex-col font-bold gap-3'>
      <p>Account number: VIN-0000{props.number}</p>
      <p>Amount: </p>
      <p className='flex justify-center'>{props.amount}</p>
      <p>Creation date: {props.creationDate}</p>
    </div>
  )
}

Accounts.protoTypes = {
  number: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  creationDate: PropTypes.node
}

export default Accounts