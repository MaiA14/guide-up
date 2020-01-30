// rfce
import React, { Component } from 'react'


import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'
import SocketService from '../service/SocketService.js'


class Chat extends Component {



    state = { visible: true }

    toggleVisibility = () =>
        this.setState((prevState) => ({ visible: !prevState.visible }))


    render() {
        const { visible } = this.state

        return (

            <React.Fragment>
                <Transition.Group animation={'fly down'} duration={1000}>

                    {visible &&
                        <div className="chat-window">
                            <div className="header-chat"></div>
                            <Form>
                                <TextArea placeholder='Tell us more' />
                            </Form>

                        </div>


                    }
                </Transition.Group >
                <div className="container-ChatCmp">



                    <div className="container-chat-icon">

                        <Button content={visible ? 'Hide' : 'Show'}
                            onClick={this.toggleVisibility} color='facebook'>
                            <Icon size={'large'} name='chat' /> send message
                    </Button>
                    </div>


                </div >
            </React.Fragment>
        )



    }

}

export default Chat

//   componentDidMount() {
//     SocketService.setup()
//     SocketService.emit('my room', myLoggedInUserId);
//     SocketService.on('recive id', this.joinChat)

//     SocketService.emit('user room', loggedinuserUserName,sentId);
//     // SocketService.emit('user joined', { text: `${userName} has joined the chat` });
//     SocketService.on('chat newComment', this.addComment)
//     // SocketService.on('user joined', this.addComment)
// }

// joinChat= (id)=>{
//   SocketService.emit('user room', loggedinGuideUserId+id);
//   SocketService.on('chat newComment', this.addComment)
// }



    // componentDidMount() {
    //     SocketService.setup()
    //     SocketService.emit('chat topic', this.props.match.params.id);
    //     // SocketService.emit('user joined', { text: `${userName} has joined the chat` });
    //     SocketService.on('chat newComment', this.addComment)
    //     // SocketService.on('user joined', this.addComment)
    // }

    // componentWillUnmount = () => {

    // }

    // sendComment = (newComment) => {
    //     SocketService.emit('chat newComment', newComment);
    // };

    // addComment = newComment => {
    //     if (!this.state.comments) return this.setState({ comments: [newComment] })
    //     this.setState(prevState => ({ comments: [...prevState.comments, newComment] }));

    // };
