import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'

import { loadGuids } from '../reducers/guide/actionGuide.js'


class GuideDetails extends Component {

    state = {

        guide:''

    }


    componentWillMount() {

        this.props.loadGuids();
        console.log(this.props.guides)
        const items = quoryString.parse(this.props.location.search)
        const guide = this.props.guides.find(guide => guide._id === items.guide_id)
        this.setState({ guide })
    }
    render() {
        return (

            <div>
                {this.state.guide &&
                    <div>
                        <h1>{this.state.guide.name}</h1>
                        <div>{this.state.guide.city}</div>
                        <div>{this.state.guide.langugages}</div>
                    </div>
                }
            </div>
        )
    }
}
const mappropsToProps = (state) => {
    return {
        guides: state.guides
    }
}
const mapDispatchToProps = {
    loadGuids,

}

export default connect(
    mappropsToProps,
    mapDispatchToProps
)(GuideDetails)

