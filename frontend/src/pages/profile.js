import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { setUserLogIn } from '../reducers/guide/actionGuide.js'
import ProfileTab from '../cmps/ProfileTab.js'
import storageService from '../service/storageService.js'
import Profile from '../cmps/Perview.js'
class profile extends Component {

    componentDidMount() {
        if (storageService.load('loggedinUser')) {
            const user = storageService.load('loggedinUser')
            console.log(user)
            this.props.setUserLogIn(user)
        }
    }


    render() {
        if (!this.props.user) {
            return <h1>loading....</h1>
        }

        return (
            <div>
                <ProfileTab></ProfileTab>
                <Profile user={this.props.user}></Profile>
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
)(profile)

