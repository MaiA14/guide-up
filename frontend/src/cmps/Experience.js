import React, { Component } from 'react'

export default class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Tell us about yourself</h1>
                <div>Write a short description about yourself</div>
                <div><input type="text" className="experience-input"></input></div>
                <div>Add a profile picture</div>
                <div>Add photos that describes you best</div>
            </div>
        )
    }
}


