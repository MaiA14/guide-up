import React, { Component } from 'react'
import { connect } from 'react-redux'

import ProfileTab from '../cmps/ProfileTab.js'
import Overview from '../cmps/Overview.js'
import Messenger from '../cmps/Messenger.js'
import Bookings from '../cmps/Bookings'
import Navbar from '../cmps/Navbar.js'

class Profile extends Component {
    state = {
        isScrolled: false
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

    render() {
        const styleNavBar = {
            backgroundColor: '#537580',
            transition: 'backgroundColor',
            position: 'absolute'
        }



        return (
            <React.Fragment>
                <Navbar styleNavBar={styleNavBar}></Navbar>
                {this.state.isScrolled &&

                    <ProfileTab></ProfileTab>
                }
                <div >

                    <Overview></Overview>
                    <Messenger></Messenger>
                    <Bookings></Bookings>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        guides: state.guides,
        user: state.user
    }
}
const mapDispatchToProps = {

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)


