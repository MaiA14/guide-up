import React, { Component } from 'react'
import { Icon, Popup, Image } from 'semantic-ui-react'

export default class TagsView extends Component {
    render() {


        if (!this.props.tags) return <h1></h1>

        return (
            <div className="tag-view">
                {Object.keys(this.props.tags).map(key => {
                    return <Popup key={key}
                        trigger={
                            <Image onClick={this.props.onSelectTag} className={this.props.tags[key].isSelected ? 'active-Selected' : ''} name={key} src={this.props.tags[key].img} />
                        }>
                        <Popup.Header>{key}</Popup.Header></Popup>
                })}
                <button onClick={() => { this.props.onSubmitTags() }} className="find-btn">Find</button>

            </div>
        )
    }
}
