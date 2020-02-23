import Chatbox from '../cmps/Chatbox.js'
import SocketService from '../service/SocketService.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextArea } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



class Messenger extends Component {
    state = { visible: false, txt: '', comments: { resiveMsg: [], outPutMsg: [] } }

    componentDidMount() {
        SocketService.setup()

        SocketService.emit('chat topic', this.props.loggedInUser._id)

        SocketService.on('chat addMsg', (newComment) => {
            console.log(newComment)
            // this.setState(prvState =>({comments:{...prvState.comments,resiveMsg:[...prvState.resiveMsg,newComment]}}))
            this.setState(prvState => ({ ...prvState, comments: { ...prvState.comments, resiveMsg: [...prvState.comments.resiveMsg, newComment] } }))

        })
    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState({ txt: value })

    }
    onSend = () =>{
        SocketService.emit('chat newMsg', this.state.txt)
        this.setState({ txt: '' })
        console.log(this.state.txt)
    }

        render() {
    return (
        <div className="messenger-container">
            <div className="childs-container">
                <div className="user-box"></div>
                <div className="chat-window">
                    {
                        this.state.comments.resiveMsg.map((comment) => {
                            return <div className="massage-container">
                                {comment}
                            </div>


                        })
                    }

                </div>
                <div className="output-box">
                    <TextArea value={this.state.txt} onChange={this.handleChange} ></TextArea>
                    <Button onClick={this.onSend}>Send</Button>
                </div>

            </div>
        </div>
    )
}
}


const mapStateToProps = (state) => {
    return {
        loggedInUser: state.guides.loggedInUser
    }
}

const mapDispatchToProps = {
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Messenger)




