import { connect } from 'react-redux'

import Calendar from '../cmps/Calendar.js'
import React, { Component } from 'react'

class Overview extends Component {
    render() {
        return (
            <div className="main-container-profile">
                <div className="overview-elements">
                    <div className="profile-name">
                        <div>{this.props.loggedInUser.name}</div>
                        <img src="https://res-console.cloudinary.com/dtwqtpteb/thumbnails/transform/v1/image/upload//v1580640789/b3A3bW5iOXQ4YnBlNWhsZHFzeHA=/drilldown" className="profile-img"></img>
                    </div>
                    <div className="calendar-container-profile">
                        <div className="calendar-content-profile">

                            <div className="calendar-title">
                                <h2>Your Calendar</h2>
                            </div>
                            <Calendar></Calendar>
                        </div>
                    </div>
                </div>
            </div>
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
)(Overview)


