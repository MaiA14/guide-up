import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import quoryString from 'query-string'

export default class GuidePreview extends Component {

    render() {
        const { props } = this
        return (
            <div>
                <Link to={`/guides/?guide_id=${props.guide._id}`}>  <div className="guide-preview-card">{props.guide.name}</div></Link>
            </div>
        )
    }

}


