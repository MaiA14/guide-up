// rfce
import React, { Component } from 'react'
import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'

import utilsService from '../service/utilsService.js'
import SocketService from '../service/SocketService.js'
import quoryString from 'query-string'



class Chat extends Component {
    state = { visible: true, comments: [] }


    componentDidMount() {

        const guide_id = this.props.guide._id
        const my_id = utilsService.getRandomID()

        SocketService.setup()
        SocketService.emit('chat topic', guide_id)// you're in the guides room
        SocketService.emit('chat message', my_id) //you're sending the guide you id
        SocketService.off('chat topic') //you're exiting the room
        SocketService.emit('chat topic', guide_id + my_id) //you're joining your room with the guide
        SocketService.emit('chat newMsg', { text: 'i have joined the chat' }) //you're joining your room with the guide
        SocketService.on('chat message', this.addmessagefunction) //you're sending the guide you id
    }

    addmessagefunction = (newComment) => {
        const comments= [...this.state.comments,newComment]
        this.setState({comments})
    }

    sendMessage = () => {
        // const comments= [...this.state.comments,newComment]
        // this.setState({comments})

        SocketService.emit('new_message','newComment')
    }

//     this.setState(prvState => ({
//         filterBy: {
//             ...prvState.filterBy,
//             ['city']: newCityToFilter
//         }
//     }), () =>
//         (this.props.loadGuides(this.state.filterBy)))
// }

toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))


render() {
    const { visible } = this.state

    return (

        <React.Fragment>
            <Transition.Group animation={'fly down'} duration={1000}>

                {visible &&
                    <div className="chat">
                        <div className="header-chat"></div>
                        <div className="window-chat"></div>
                        <Form className="form-chat" success>
                            <TextArea className="textArea-chat" placeholder='Tell us more' />
                            <Button className="chat-buttom" color='green'>Green</Button>
                        </Form>

                    </div>


                }
            </Transition.Group >
            <div className="container-ChatCmp">



                <div className="container-chat-icon">

                    <Button content={visible ? 'Hide' : 'Show'}
                        onClick={this.toggleVisibility} color='facebook'>
                        send message
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
