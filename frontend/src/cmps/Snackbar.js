import React, { Component } from 'react'

import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'

{/* <Transition.Group animation={'fly left'} duration={1500}>
{visible &&
    <div className="chat">
        <div className="header-chat"></div>
        <div ref={this.myRef} className="window-chat">
            {this.state.comments.map(comment => {
                return <div className="bubble-message">{comment} </div>
            })}
        </div>
        <Form className="form-chat flex" success>
            <TextArea onChange={this.handleChange} className="textArea-chat" placeholder='Tell us more' />
            <Button onClick={this.handleSendMassage} className="chat-button" color='green'>Send</Button>
        </Form>
    </div>
}
</Transition.Group > */}



export default class Snackbar extends Component {
    render() {
        return (
            <React.Fragment>

                <Transition.Group animation={'fly left'} duration={3000}>
                    {this.props.visible &&

                        <div>
                            <div className="snack-bar">You got a message</div>
                        </div>
                    }

                </Transition.Group >
            </React.Fragment>

        )
    }
}



