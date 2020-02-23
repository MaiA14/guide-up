
import Calendar from '../cmps/Calendar.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Overview extends Component {
    render() {
        return (
                <div className="overview-elements">
                    <div className="profile-name">
                        <div>{this.props.loggedInUser.name}</div>
                        <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580645155/yvxjwedsvz7pvgqaibmr.jpg" className="profile-img"></img>
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


