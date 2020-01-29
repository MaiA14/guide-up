import React from 'react';
import { getIconTag } from '../service/guideService.js'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Icon } from 'semantic-ui-react'


export default function GuideTags(props) {
const styleFont = {

}
    const tagIcon = getIconTag()


    const labelStyle = {
        width: '183px',
        marginLeft: '4px'
    }
    return props.guide.tags.map((tag, index) => {
        return (
            <div className="tags-container">  
           <span style={labelStyle} key={props.guide._id + index}> {tag} </span>            
                <img src={tagIcon[tag]}  className={props.iconClass}></img>
            </div>
        )
    })
}

