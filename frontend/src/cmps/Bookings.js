import React from 'react'

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
            <div className="flex column">
            <div className="user-details">
                <div></div>
                <div className="user-booking-title">Booked by Ben</div>
                <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580599767/xwctmk45mtye2os8foov.png" className="msg-user-img"></img>
            </div>
            <div className="user-order">
                <span>For 4 attendees<br></br>
                    The tour is 30 days ago<br></br>
                    (01/03/2020)<br></br>
                </span>
                <div className="booking-info">
                    <div>Today at 3:40 PM</div>
                    <button className="send-message" onClick={()=>
                        window.scrollTo({top: 500, behavior: 'smooth'})}>
                            Send a message</button>
                </div>
            </div>
            </div>
            <div className="flex column">
            <div className="user-details">
                <div></div>
                <div className="user-booking-title">Booked by Ben</div>
                <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580599767/xwctmk45mtye2os8foov.png" className="msg-user-img"></img>
            </div>
            <div className="user-order">
                <span>For 3 attendees<br></br>
                    The tour is 60 days ago<br></br>
                    (12/01/2019)<br></br>
                </span>
                <div className="booking-info">
                    <div>Friday at 1:40 PM</div>
                    <button className="send-message" onClick={()=>
                        window.scrollTo({top: 500, behavior: 'smooth'})}>
                            Send a message</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Bookings