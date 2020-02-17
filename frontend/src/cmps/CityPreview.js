import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Image from 'material-ui-image'

export default class CityPreview extends Component {

    render() {
        const imgStyle = {
            width: '100%',
            borderRadius: '10PX'

        }
        const { props } = this
        return (

            <Link style={imgStyle} className={props.city} 
            to={`/location/?city=${props.city}`}>
                <div>
                    <div className="country-preview-card square-ratio"> 
                    </div>
                    <div className="country-label">
                            {props.city}
                    </div>
                </div></Link>

        )
    }
}
