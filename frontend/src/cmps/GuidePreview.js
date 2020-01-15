import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class GuidePreview extends Component {
    render() {
        const divStyle = {
            width: "100px",
            height: "100px",
            backgroundColor: "green",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px'

        }

        const { props } = this
        console.log(props);

        return (
    
                <div style={divStyle}>
                    {props.guide.name}
                </div>
        

        )
    }
}
