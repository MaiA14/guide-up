import React, { Component } from 'react'
import { TextArea } from 'semantic-ui-react'

export default class Chatbox extends Component {
    render() {
        return (
            <div>
               <div className="chat-messages-chatbox">
                            <div className="chat-details">
                                <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580585567/liivrwjfvseuovfquyxp.png" 
                                className="chat-user-img"></img>
                                <div className="chat-guide-name">Lihi Cohen</div>
                            </div>
                            <div className="chat-window">
                            <div className="bubble-message">message</div>
                            <div className="bubble-message">message</div>
                            <div className="bubble-message">message</div>
                            </div>
                            <div className="chat-textarea-send-btn">
                            <TextArea className="chat-textarea" placeholder='Type a message...' />
                            <button className="send-btn">Send</button>
                            </div>
                            
                  </div>   
            </div>
        )
    }
}
