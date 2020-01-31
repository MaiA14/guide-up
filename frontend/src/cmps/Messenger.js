import React from 'react'
import Calendar from '../cmps/Calendar.js'

function Messenger(props) {
    return (
        <div className="">
            <div className="chat-container main-container-profile">
            <section className="chat-list flex">
           
                <div className="chat-details">
                <div className="chat-box"><button className="send">Send</button></div>
                {/* <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580396620/zje52rcedmh5pmi0qg13.jpg" className="chat-user-img"></img>
            <h2 className="chat-title">Chat</h2> */}
            
            </div>
        
        {/* <div className="chat-header">
        <div className="chat-details">
        <img src="https://res.cloudinary.com/dtwqtpteb/image/upload/v1580396620/zje52rcedmh5pmi0qg13.jpg" className="chat-user-img"></img>
        <h2 className="chat-title">guide</h2>
        </div>
        </div>  */}
        </section>
        </div>
        </div>
    )
}

export default Messenger

