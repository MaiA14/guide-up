import React, { Component } from 'react'
import { getIconTag } from '../service/guideService.js'

export default class TagsView extends Component {
    state = {
        tags: getIconTag()
    }

    render() {
        if (!this.state.tags) return <h1></h1>
        return (
            <div className="tag-view">
                {Object.keys(this.state.tags).map(key => {
                    return <div> <img src={this.state.tags[key]}></img></div>
                })}
            </div>
        )
    }
}
