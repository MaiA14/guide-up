import React, { Component } from 'react'
import { withRouter, Router, Link, Route, Switch } from 'react-router-dom';

import Information from '../cmps/Information.js'





class BecomeGuide extends Component {

    state = {
        active: null
    }


    active = (ev) => {
        const active = ev.target.className
        this.setState({ active })

    }


    render() {
        return (



            <div>
                <h1>Topics</h1>
                <ul>
                    <li >
                        <Link to={`BecomeGuide/info`}>info</Link>
                    </li>



                </ul>

                <hr />
                <Route path={`/BecomeGuide/:info`} component={Information} />
                <Route path={`/BecomeGuide/:experience`} component={Exper} />

            </div>

        )






    }
}

export default withRouter(BecomeGuide)