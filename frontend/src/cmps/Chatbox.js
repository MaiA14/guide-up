import React, { Component } from 'react'
import { TextArea } from 'semantic-ui-react'
import { connect } from 'react-redux'

import SocketService from '../service/SocketService.js'


class Chatbox extends Component {

    state = { visible: false, txt: '', comments: [] }



    componentDidMount() {
        SocketService.setup()

        SocketService.emit('chat topic', this.props.loggedInUser._id) 

        SocketService.on('chat addMsg', (newComment) => {

            this.props.toggleVisibility()
            
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
const mapStateToProps = (state) => {
    return {
        guides: state.guides,
        loggedInUser: state.guides.loggedInUser
    }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chatbox)