import React, { Component } from 'react'
import { connect } from 'react-redux'
import quoryString from 'query-string'

import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'




class GuideListFiltered extends Component {
    state = {

        filterGuides: [],
        city:''
    }

    componentDidMount() {
        this.props.loadGuides();

    }
    componentWillReceiveProps(newProps) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
        const items = quoryString.parse(newProps.location.search)
        const city = items.city
        const filterGuides = this.props.guides.filter(guides => guides.city === city )
        this.setState({ filterGuides,city })

    }



    render() {
        const selectStyle ={
            border:'1px solid rgb(54, 71, 153)'

        }
        return (
            <div>
    <h1 className="filtered-guides-header space">{this.state.city+'\'s guides'}</h1>
                <h2 className="guides-short-content space">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
                <div className="filtered-glist-container">
            
                    <MainSearch style ={selectStyle} ></MainSearch>
               
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
                </div>
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