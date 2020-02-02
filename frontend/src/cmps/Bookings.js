import React from 'react'
import { ButtonBase } from '@material-ui/core'

function Bookings(props) {
    return (
        <div className="main-container-profile">
            <div className="flex column">
            <div className="user-details">
                <div></div>
                <div className="user-booking-title">Booked by Ben</div>
                <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580599767/xwctmk45mtye2os8foov.png" className="msg-user-img"></img>
            </div>
            <div className="user-order">
                <span>For 2 attendees<br></br>
                    The tour is 13 days ago<br></br>
                    (1/20/2020)<br></br>
                </span>
                <div className="booking-info">
                    <div>Today at 7:40 PM</div>
                    <button className="send-message" onClick={()=>
                        window.scrollTo({top: 500, behavior: 'smooth'})}>
                            Send a message</button>
                </div>
            </div>
            </div>
            <div className="user-order">
                <span>For 3 attendees<br></br>
                    The tour is 30 days ago<br></br>
                    (1/20/2020)<br></br>
                </span>
                <div className="booking-info">
                    <div>Thursday at 2:40 PM</div>
                    <button className="send-message" onClick={()=>
                        window.scrollTo({top: 500, behavior: 'smooth'})}>
                            Send a message</button>
                </div>
            </div>
            <div className="user-order">
                <span>For 2 attendees<br></br>
                    The tour is 60 days ago<br></br>
                    (1/20/2020)<br></br>
                </span>
                <div className="booking-info">
                    <div>Friday at 5:40 PM</div>
                    <button className="send-message" onClick={()=>
                        window.scrollTo({top: 500, behavior: 'smooth'})}>
                            Send a message</button>
                </div>
            </div>
        </div>
    )
}

export default Bookings