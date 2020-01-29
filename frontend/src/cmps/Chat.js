// rfce
import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import SocketService from '../service/SocketService.js'


class Chat extends Component {


    componentDidMount() {
        SocketService.setup()
        SocketService.emit('chat topic', this.props.match.params.id);
        // SocketService.emit('user joined', { text: `${userName} has joined the chat` });
        SocketService.on('chat newComment', this.addComment)
        // SocketService.on('user joined', this.addComment)
    }

    componentWillUnmount = () => {
       
    }

    sendComment = (newComment) => {
        SocketService.emit('chat newComment', newComment);
    };

    addComment = newComment => {
        if (!this.state.comments) return this.setState({ comments: [newComment] })
        this.setState(prevState => ({ comments: [...prevState.comments, newComment] }));

    };


    render() {

        return (
            <React.Fragment>

                <div className="container-chat-icon">
                    <Image src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580140663/q6heebl8noebf9mz2ocu.png"></Image>
                </div>


            </React.Fragment >
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