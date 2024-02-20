import React from 'react'
import PropTypes from 'prop-types'

function Card( props ) {
    return (
        <div > 
            <p>{ props.number }</p>
            <p>{ props.name}</p>
            <p>VALID { props.expDate }</p>
        </div>
    )
}
Card.protoTypes = {
    number:  PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    expDate: PropTypes.node.isRequired
}

export default Card