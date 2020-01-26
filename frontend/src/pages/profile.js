import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { setUserLogIn } from '../reducers/guide/actionGuide.js'
import Profile from '../cmps/ProfileTab.js'
import storageService from '../service/storageService.js'
class profile extends Component {

    componentDidMount() {
        if (storageService.load('loggedinUser')) {
            const user = storageService.load('loggedinUser')
            console.log(user)
            this.props.setUserLogIn(user)
        }
    }


    render() {
        console.log(this.props.user)
        if (!this.props.user) {
            return <h1>loading....</h1>
        }

        return (
            <div>
                <Profile></Profile>
                <div className="container-overview">
                    asdasdasd
                    <Image src={this.props.user.imgUrl}> </Image>


                </div>




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

