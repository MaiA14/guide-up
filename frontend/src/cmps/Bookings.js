import React from 'react'
import { ButtonBase } from '@material-ui/core'

function Bookings(props) {
    return (
        <div className="main-container-profile">
            <div className="user-details">
                <div></div>
                <div className="user-booking-title">Booked by Ben</div>
                <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580599767/xwctmk45mtye2os8foov.png" className="msg-user-img"></img>
            </div>
            <div className="flex">
                <span>For 2 attendees<br></br>
                    The tour is 13 days ago<br></br>
                    (1/20/2020)<br></br>
                </span>
                <div className="booking-info">
                <div>Today at 7:40 PM</div>
                <button className="send-btn">Send a message</button>
                </div>
            </div>
        </div>
    )
}

export default Bookings