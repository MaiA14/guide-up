import React, { Component } from 'react'
import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'

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



