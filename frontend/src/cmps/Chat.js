// rfce
import React, { Component } from 'react'
import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'

import utilsService from '../service/utilsService.js'
import SocketService from '../service/SocketService.js'
import quoryString from 'query-string'

class Chat extends Component {
    state = { visible: false, txt: '', comments: [] }
    myRef = React.createRef();
    componentDidMount() {

        const guide_id = this.props.guide._id
        SocketService.setup()
        SocketService.emit('chat topic', guide_id)
    
        SocketService.on('chat addMsg', (newComment) => {
            console.log('newComment ',newComment)
            this.setState(prevState => ({ comments: [...prevState.comments, newComment] }))
        }) 
    }

    handleSendMassage = () => {

        SocketService.emit('chat newMsg', this.state.txt)
        this.setState({ txt: '' })

    }

    handleChange = (ev) => {
        const value = ev.target.value
        this.setState({ txt: value })

    }

    toggleVisibility = () =>
        this.setState((prevState) => ({ visible: !prevState.visible }))

    render() {
        const { visible } = this.state
        return (
            <React.Fragment>
                <Transition.Group animation={'fly left'} duration={1500}>
                    {visible &&
                        <div className="chat">
                            <div className="header-chat"></div>
                            <div ref={this.myRef} className="window-chat">
                                {this.state.comments.map(comment => {
                                    return <div className="bubble-message">
                                        {comment} </div>
                                })}
                            </div>
                            <Form className="form-chat flex" success>
                                <TextArea value={this.state.txt} 
                                onChange={this.handleChange} 
                                className="textArea-chat" placeholder='Tell us more' />
                                <Button onClick={this.handleSendMassage} 
                                className="chat-button" color='green'>Send</Button>
                            </Form>
                        </div>
                    }
                </Transition.Group >
                <div className="container-ChatCmp">
                    <div className="container-chat-icon">
                        <Button content={visible ? 'Hide' : 'Show'}
                            onClick={this.toggleVisibility} color='facebook'>
                            Send a message
                    </Button>
                    </div>
                </div >
            </React.Fragment>
        )
    }
}

export default Chat