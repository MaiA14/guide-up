import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import quoryString from 'query-string'

export default class GuidePreview extends Component {

    render() {
        const { props } = this
        return (
            <Link className="guide-preview-card" to={`/guides/?guide_id=${props.guide._id}`}>  <div>
                <div >{props.guide.name}</div>
            </div></Link>
        )
    }

}


