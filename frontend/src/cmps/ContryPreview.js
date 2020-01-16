import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContryPreview extends Component {

    render() {


        const {props} = this
        return (
            <div>
            <Link  to={`/location/?city=${props.country}`}>  <div className="country-preview-card">{props.country}</div></Link>
            </div>

        )
          
            
        
          
    }
}
