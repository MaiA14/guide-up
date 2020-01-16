import React from 'react'
import { NavLink } from 'react-router-dom'
import MainSearch from '../cmps/MainSearch.js'

export default function Header(props) {

    return (
        <div className="main-header"><h1>Travel extrodinary places with local guides worldwide</h1>
            <MainSearch></MainSearch>
            </div>
    )
}

