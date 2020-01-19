import React, { Component } from 'react'
import { Router, Link, Route } from 'react-router-dom';





export default class BecameGuide extends Component {

    state = {
        active: null
    }


    active = (ev) => {
        const active = ev.target.className
        this.setState({ active })

    }


    render() {
        return (
            <Router>

            <div className="tabs-nav">
                <Link><div  className="tab-Hello">Hello</div></Link>
                <Link><div  className="tab-Information">Information</div></Link>
                <Link><div  className="tab-Interests">Interests</div></Link>
                <Link><div className="tab-Experience">Experience</div></Link>
            </div>
            <Route exact path='/' component={information}></Route>


            </Router>
        )
    }
}
