import React, { Component } from 'react'

export default class Information extends Component {
    render() {
        return (
            <div className="flex column align-center justify-center">
                <div>
                    <div> <input type="text" className="login-input" placeholder=" Fullname"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Username"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Password"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Languages"></input></div>
                    <div> <input type="text" className="login-input" placeholder=" Location"></input></div>
                </div>
            </div>

        )
    }
}
