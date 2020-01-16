import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header(props) {

    return (
        <div className="main-header"><h1>Travel extrodinary places with local guides worldwide</h1>
        <div className="search-container flex">
            <select className="main-search flex">
            {/* <option value="" disabled selected hidden>Choose your framework</option> */}
                <option value="london">London</option>
                <option value="paris">Paris</option>
                <option value="rome">Rome</option>
                <option value="berlin">Berlin</option>
                <option value="tokyo">Tokyo</option>
                <option value="barcelona">Barcelona</option>
            </select>
            <button className="search-btn">Search</button>
            </div>
           
        </div>
    )

}
