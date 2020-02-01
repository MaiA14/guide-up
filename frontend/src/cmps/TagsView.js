import React, { Component } from 'react'
import { getIconTag } from '../service/guideService.js'
import { Icon, Popup, Image } from 'semantic-ui-react'

export default class TagsView extends Component {
    state = {
        tags: getIconTag(),
        tagsCaption: [],
        isSelected: false,
    }

    onSelectTag = (ev) => {
        ev.stopPropagation()

        const tag = ev.target.name
        const ans = this.state.tagsCaption.includes(tag);
    
        if (ans) {
            this.setState(prevState => ({ tagsCaption:  this.state.tagsCaption.filter(tag1 => tag1 !== tag) }), () => console.log(this.state.tagsCaption))
            ev.target.className = ""
        }else{
            this.setState(prevState => ({ tagsCaption: [...prevState.tagsCaption, tag] }), () => console.log(this.state.tagsCaption))
            ev.target.className = "active-Selected"
        }
    }

    render() {
        if (!this.state.tags) return <h1></h1>
        return (
            <div className="tag-view">
                <div className="tags-img flex">
                {Object.keys(this.state.tags).map(key => {
                    return <Popup key={key}
                        trigger={
                            <Image ref={this.myRef} onClick={this.onSelectTag} className="selected-tag" name={key} src={this.state.tags[key]} />
                        }>
                        <Popup.Header>{key}</Popup.Header></Popup>
                })}
                </div>
                <button onClick={() =>{this.props.onSubmitTags(this.state.tagsCaption)}} className="search-btn flex"> Find</button>
            </div>
        )
    }
}
