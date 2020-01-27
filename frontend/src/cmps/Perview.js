import React from 'react'
import { Image } from 'semantic-ui-react'

import Calendar from './Calendar.js'

// rfce
function Perview(props) {


    const imageStyle = {
        borderRadius: '30px',
        objectFit: 'cover'
    }
    const calendarStyle ={
        marginTop: '66px'
    }
    return (
        <div>

            <div className="container-PerviewProfile">
                <div className="imgPreview">
                    <h1>{props.user.name} </h1>

                    <Image style={imageStyle} src={props.user.imgUrl} size={'medium'}   ></Image>



                </div>
                <Calendar style={calendarStyle}></Calendar>



            </div>



        </div>
    )
}

export default Perview

