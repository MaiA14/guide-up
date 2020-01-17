import React, { Component } from 'react'
import { connect } from 'react-redux'
import quoryString from 'query-string'

import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'



class GuideListFiltered extends Component {
    state = {
  
        filterGuides: []
    }

    componentDidMount() {
        this.props.loadGuides();
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
                <h2 className="guides-short-content space">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
                choose tags:<input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Art</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Coffe</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Music</label>
                <input type="checkbox" checked="checked"></input>
                <span class="checkmark"></span>
                <label class="container">Movies</label>

                <section className="cards-list main-container">
                    {this.state.filterGuides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
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
    loadGuides,

}

export default connect(
    mappropsToProps,
    mapDispatchToProps
)(GuideListFiltered)