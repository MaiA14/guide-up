import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'


import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'
import Loading from '../cmps/Loading.js'
import Navbar from '../cmps/Navbar.js'
class FilteredGuideList extends Component {
    state = {
        filterGuides: []
    }

    componentDidMount() {
        document.body.style.paddingTop = '60px'
    }

    componentWillMount() {

        const items = queryString.parse(this.props.location.search)
        this.props.loadGuides(items.city);

    }

    onSearch = (city) => {
        const items = queryString.parse(this.props.location.search)
        this.props.loadGuides(city);
    }
    render() {
        const selectStyle = {
            border: '1px solid rgb(54, 71, 153)'
        }
        if (!this.props.guides.length) return (
            <Loading></Loading>
        )
        const styleNavBar = {
            backgroundColor: '#161f24'
        }

        
        return (
            
            <div>
            <Navbar  styleNavBar={styleNavBar} ></Navbar>    
                <h1 className="filtered-guides-header main-container">{this.props.guides[0].city + '\'s guides'}</h1>
                <h2 className="guides-short-content main-container">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
                <div className="filtered-glist-container">
                    <MainSearch onSearch={this.onSearch} style={selectStyle} ></MainSearch>
                    {/* choose tags:<input type="checkbox" checked="checked"></input>
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
                    <label className="container">Movies</label> */}
                </div>
                <section className="cards-list main-container">
                    {this.props.guides.map(guide => <GuidePreview key={guide._id} guide={guide}></GuidePreview>)}
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
)(FilteredGuideList)
           

