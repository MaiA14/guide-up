import React, { Component } from 'react'
import { connect } from 'react-redux'
import quoryString from 'query-string'

import GuidePreviewCard from '../cmps/GuidePreview.js'
import { loadGuids } from '../reducers/guide/actionGuide.js'



class GuideListFiltered extends Component {
    state = {
  
        filterGuides: []
    }

    componentDidMount() {

        this.props.loadGuids();

    }


    componentWillMount() {
        const items = quoryString.parse(this.props.location.search)

        const filterGuides = this.props.guides.filter(guides => guides.city === items.city)
        this.setState({filterGuides})
    }


    render() {
        return (
            <div>
                <h1 className="filtered-guides-header space">Guides</h1>
                choose tags:<input type="checkbox" checked="checked"></input>
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

                <section className="cards-list main-container">
                    {this.state.filterGuides.map(guide => <GuidePreviewCard key={guide._id} guide={guide}></GuidePreviewCard>)}
                </section>
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
)(GuideListFiltered)

