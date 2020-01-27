// rfce
import React from 'react'
import { Image } from 'semantic-ui-react'

function Chat(props) {
    console.log(props)
    return (
        <div className="container-chat">

            <div className="container-chat-icon">
            <Image  src={props.guide.imgUrl}     ></Image>


            </div>
            
        </div>
    )
}

export default Chat

