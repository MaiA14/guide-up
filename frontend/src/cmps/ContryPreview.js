import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContryPreview extends Component {

    render() {


        const { props } = this
        return (
         
                <Link  className={props.country} to={`/location/?city=${props.country}`}>
                    <div>
                        <div className="country-preview-card">
                            <div className="country-label">
                                {props.country}</div>
                            </div>
                    </div></Link>
        
        )
    }
}
