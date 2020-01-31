import React from 'react'
import Calendar from '../cmps/Calendar.js'

function Overview(props) {
    return (
        <div className="main-container-profile">
            <div className="overview-elements">
                <div className="profile-name">
                    <div>Daniel</div>
                    <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580392567/o1mykjnxhtugetebi53a.jpg" className="profile-img"></img>
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

export default Overview

