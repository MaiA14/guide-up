import React from 'react';
import { getIconTag } from '../service/guideService.js'
import { Icon, Popup, Image } from 'semantic-ui-react'

export default function GuideTags(props) {
    const styleFont = {
    }
    const tagIcon = getIconTag()

    const labelStyle = {
        width: '183px',
        marginLeft: '4px'
    }

    const iconStyle = {
        width: '9%',
        height: '90%'
    }

    const img = {
        width: '10%'
    }
    console.log(tagIcon)
    return props.guide.tags.map((tag, index) => {
        return (
            <div className="tags-container">
                <Popup
                    trigger={
                        <Image src={tagIcon[tag].img} className={iconStyle} />
                    }>
                    <Popup.Header>{tag}</Popup.Header></Popup>
            </div>
        )
    })
}

