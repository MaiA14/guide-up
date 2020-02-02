import React, { Component } from 'react'
import { TextArea } from 'semantic-ui-react'

import SocketService from '../service/SocketService.js'


export default class Chatbox extends Component {

    state = { visible: false, txt: '', comments: [] }



    componentDidMount() {
        SocketService.setup()

        SocketService.emit('chat topic', '123') //you're joining your room with the guide
        SocketService.on('chat addMsg', (newComment) => {
            console.log(newComment)
            this.setState(prevState => ({ comments: [...prevState.comments, newComment] }))
        })
    }


    render() {
        console.log(this.state.comments)
        return (
            <div>
                <div className="chat-messages-chatbox">
                    <div className="chat-details">
                        <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580585567/liivrwjfvseuovfquyxp.png"
                            className="chat-user-img"></img>
                        <div className="chat-guide-name">Lihi Cohen</div>
                    </div>
                    <div className="chat-window">

                        {this.state.comments.map(comment => {
                            return <div className="bubble-message">{comment}</div>

                        })}
                        {/* <div className="bubble-message">message</div>
                        <div className="bubble-message">message</div> */}
                    </div>
                    <div className="message-container">
                        <input type="text" className="message-input" placeholder="Type a message..."></input>
                        <button className="send-btn">Send</button>
                    </div>

                </div>
            </div>
        )
    }
}
