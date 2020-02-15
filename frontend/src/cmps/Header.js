
import { NavLink } from 'react-router-dom'
import MainSearch from '../cmps/MainSearch.js'

import React, { Component } from 'react'

export default class Header extends Component {

    render() {
        return (
     
                <div className="main-header "><h1>Travel with a local guide worldwide</h1>
                    <MainSearch onSearch={this.onSearch} ></MainSearch>
                </div>
           
        )
    }
}
// return (

//     <div className="main-header">
//         <img className="popo" src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1579691847/xpozmmur9ztc6eziq1xl.jpg" />
//         <h1>Travel with a local guide worldwide</h1>
//         <MainSearch onSearch={this.onSearch} ></MainSearch>
//     </div>
// )
