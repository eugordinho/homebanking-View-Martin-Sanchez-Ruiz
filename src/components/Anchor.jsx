import React from "react";
import PropTypes from 'prop-types'
import { NavLink }from 'react-router-dom'

export const Anchor = ( props ) => {
    return (

        <NavLink to={props.href} className={( isActive, isPending) => isActive ? "text-blue-700 font-bold" : ""}>{props.children} </NavLink>

    )
}

Anchor.protoTypes = {
    href:  PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}