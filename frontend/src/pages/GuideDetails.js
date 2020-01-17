import React, { Component } from 'react'
import quoryString from 'query-string'
import { connect } from 'react-redux'

import { loadGuides } from '../reducers/guide/actionGuide.js'

class GuideDetails extends Component {

    state = {
        guide: ''
    }

    componentWillMount() {
        this.props.loadGuides();
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
                        <button className="back-btn space">Back</button>
                        <h1 className="guide-header space">{this.state.guide.name}</h1>
                        <img src={this.state.guide.imgUrl} className="guide-img-details space" ></img>
                        <h2 className="guide-desc space">{this.state.guide.description}</h2>
                       <span className="space"> From: {this.state.guide.city}</span>
                        <span className="space">Langugages: {this.state.guide.langugages}</span>
                        <div className="guide-reviews-title space">Reviews(0):</div>
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
    loadGuides,

}

export default connect(
    mappropsToProps,
    mapDispatchToProps
)(GuideDetails)

