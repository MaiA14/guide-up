import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContryPreview extends Component {
    render() {
        const divStyle = {
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin:'5px'

        }

        const {props} = this
        return (
            <div style={divStyle}>
                {props.country}

            </div>
        )
    }
}
