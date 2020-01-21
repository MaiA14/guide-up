import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from 'material-ui-image'

export default class ContryPreview extends Component {

    render() {
        const imgStyle = {
            width:'100%',
            borderRadius: '10PX'

        }

        const { props } = this
        return (
         
                <Link style={imgStyle}  className={props.country} to={`/location/?city=${props.country}`}>
                    <div>
                        <div className="country-preview-card">
                            <div className="country-label">
                                {props.country}</div>
                            </div>
                    </div></Link>
        
        )
    }
}
