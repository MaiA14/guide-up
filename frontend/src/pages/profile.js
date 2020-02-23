import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Button, Transition, Form, TextArea } from 'semantic-ui-react'

import ProfileTab from '../cmps/ProfileTab.js'
import Overview from '../cmps/Overview.js'
import Messenger from '../cmps/Messenger.js'
import Bookings from '../cmps/Bookings'
import Navbar from '../cmps/Navbar.js'

import Snackbar from '../cmps/Snackbar.js'



class Profile extends Component {
    state = {
        isScrolled: false,
        visible: false
    }


    componentDidMount() {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 1) {
                this.setState({ isScrolled: true })
            } if (document.documentElement.scrollTop < 1) {
                this.setState({ isScrolled: false })
            }
        }
    }

    toggleVisibility = () =>
        this.setState((prevState) => ({ visible: !prevState.visible }))

    render() {
        const styleNavBar = {
            backgroundColor: '#537580',
            transition: 'backgroundColor',
            position: 'absolute'
        }
        const { visible } = this.state




        return (
            <React.Fragment>
                <Navbar styleNavBar={styleNavBar}></Navbar>
                {this.state.isScrolled &&
                    <ProfileTab></ProfileTab>
                }
                <div >
                    <Overview></Overview>
                    <Messenger ></Messenger>
                    <Bookings></Bookings>
                </div>
                <Transition.Group animation={'fly left'} duration={1500}>
                    {visible &&
                        <Snackbar visible={this.state.visible} ></Snackbar>

                    }
                </Transition.Group >




            </React.Fragment>
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
)(Profile)


