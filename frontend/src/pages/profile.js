import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { setUserLogIn } from '../reducers/guide/actionGuide.js'
import ProfileTab from '../cmps/ProfileTab.js'
import storageService from '../service/storageService.js'
import Overview from '../cmps/Overview.js'
import Messenger from '../cmps/Messenger.js'
import Bookings from '../cmps/Bookings'


class Profile extends Component {

    // componentDidMount() {
    //     if (storageService.load('loggedinUser')) {
    //         const user = storageService.load('loggedinUser')
    //         console.log(user)
    //         this.props.setUserLogIn(user)
    //     }
    // }


    render() {
        return (
            <div>
                <ProfileTab></ProfileTab>
                <Overview></Overview>
                <Messenger></Messenger>
                <Bookings></Bookings>
            </div>
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
    setUserLogIn

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)


