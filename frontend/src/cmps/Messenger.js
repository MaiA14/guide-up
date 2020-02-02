import Chatbox from '../cmps/Chatbox.js'

import React, { Component } from 'react'

class Messenger extends Component {
    render() {
        return (
            <div>
                <div className="main-container-profile">
                    <div className="chat-container">
                        <div className="chat-list flex column">
                            <div className="chat-title">Chat</div>
                            <div className="flex">
                                <div className="chat-messages">
                                    <div className="chat-details">
                                        <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580585567/liivrwjfvseuovfquyxp.png"
                                            className="chat-user-img"></img>
                                        <div className="chat-guide-name">Lihi Cohen</div>
                                    </div>
                                </div>
                                <div className="chat-box">
                                    <Chatbox toggleVisibility={this.props.toggleVisibility}></Chatbox>
                                </div>
                            </div>
                        </div>
                        <div className="chat-header">
                        </div>
                    </div>
                </div >

            </div>
        )
    }
}





export default Messenger