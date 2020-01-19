import React, { Component } from 'react'
import { Link, Router, Route, Switch } from 'react-router-dom';

import Information from '../cmps/Information.js'
import Hello from '../cmps/Hello.js'
import Tags from '../cmps/Tags.js'




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
                    <Link to={'/BecomeGuide'}><div className="tab-Hello">Hello</div></Link>
                    <Link to={'/BecomeGuide/info'}><div className="tab-Information">Information</div></Link>
                    <Link to={'/BecomeGuide/tags'}><div className="tab-Interests">Tags</div></Link>
                    <div className="tab-Experience">Experience</div>



                </div >
                <div>
                    <Switch>
                        <Route path={`/BecomeGuide`} component={Hello} exact />
                        <Route path={`/BecomeGuide/info`} component={Information} exact />
                        <Route path={`/BecomeGuide/tags`} component={Tags} exact />
                        {/* <Route path={`/BecomeGuide/:info`} component={Information} /> */}
                    </Switch>


                </div>
            </React.Fragment>

        )

    }
}
