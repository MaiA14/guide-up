import React, { Component } from 'react'
import { Link, Router, Route, Switch } from 'react-router-dom';

import Information from '../cmps/Information.js'
import Hello from '../cmps/Hello.js'
import Tags from '../cmps/Tags.js'
import Experience from '../cmps/Experience.js'

export default class BecomeGuide extends Component {

    state = {
        active: null
    }

    active = (ev) => {
        const active = ev.target.className
        this.setState({ active })
    }

    render() {
        return (
            <React.Fragment>
                <div className="tabs-nav">
                    <Link to={'/join_us'}><div className="tab-Hello">Hello</div></Link>
                    <Link to={'/join_us/edit_guide/info'}><div className="tab-Information">Information</div></Link>
                    <Link to={'/join_us/edit_guide/tags'}><div className="tab-Interests">Tags</div></Link>
                    <Link to={'/join_us/edit_guide/experience'}><div className="tab-Experience">Experience</div></Link>
                </div>
                <div>
                    <Switch>
                        <Route path={`/join_us`} component={Hello} exact />
                        <Route path={`/join_us/edit_guide/info`} component={Information} exact />
                        <Route path={`/join_us/edit_guide/tags`} component={Tags} exact />
                        <Route path={`/join_us/edit_guide/experience`} component={Experience} exact />
                    </Switch>
                </div>
            </React.Fragment>
        )
    }
}
