import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
            <div>
            <div>
                <input type="text" className="review-input" placeholder="Title"></input>
            </div>
            <div>
                <input type="text" className="review-input" placeholder="What do you think about me?"></input>
            </div>
            <div>Rate</div>
            <div>
            <select>
                    <option value="" disabled selected> </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                </div>
                <button className="send-btn">Send</button>
               </div>
        )
    }
}
