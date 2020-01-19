import React, { Component } from 'react'

export default class Tags extends Component {
    render() {
        return (
            <div className="flex column align-center justify-center">
                <div><h2>Pick at least 2 interests that describe you the best:</h2></div>
                <input type="checkbox" checked="checked"></input>
                <span className="checkmark"></span>
                <label className="container">Art</label>
                <input type="checkbox" checked="checked"></input>
                <span className="checkmark"></span>
                <label className="container">Coffe</label>
                <input type="checkbox" checked="checked"></input>
                <span className="checkmark"></span>
                <label className="container">Music</label>
                <input type="checkbox" checked="checked"></input>
                <span className="checkmark"></span>
                <label className="container">Movies</label>
            </div>

        )
    }
}
