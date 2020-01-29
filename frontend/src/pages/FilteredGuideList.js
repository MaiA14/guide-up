import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'

import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides, loadTags } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'
import Loading from '../cmps/Loading.js'
import Navbar from '../cmps/Navbar.js'
import Footer from '../cmps/Footer.js'

class FilteredGuideList extends Component {

    state = {
        filterBy: { city: '', avgRank: ''}
    }

    componentDidMount() {
        document.body.style.paddingTop = '60px'
        let items = queryString.parse(this.props.location.search)
        let newCityToFilter = items.city
        this.setState(prvState => ({ filterBy: { ...prvState.filterBy, 
            ['city']: newCityToFilter } }), () => 
            (this.props.loadGuides(this.state.filterBy)))
    }
    
    onSearch = (newCityToFilter) => {
        this.setState(prvState => ({ filterBy: { ...prvState.filterBy, ['city']: 
        newCityToFilter } }), () => (this.props.loadGuides(this.state.filterBy)))
    }

    render() {
        const searchStyle = {
            contanerStyle: {
                marginTop: '20px'
            },
            selectStyle: {
                border: '1px solid #ef8758',
            }
        }

        const styleNavBar = {
            backgroundColor: '#161f24'
        }

        if (this.props.isLoading) {
            return <Loading></Loading>
        }

        return (
            <React.Fragment>
                <Navbar styleNavBar={styleNavBar} ></Navbar>
                <h1 className="filtered-guides-header main-container">
                    {this.state.filterBy.city + '\'s guides'}</h1>
                <h2 className="guides-short-content main-container">
                    Find your guides, let them share with you the insight on the city. 
                     Enjoy from unforgatable trip</h2>
                <div className="filtered-glist-container">
                    <MainSearch onSearch={this.onSearch} style={searchStyle}>
                    </MainSearch>
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
                    {this.props.guides.map(guide => <GuidePreview key={guide._id}
                     guide={guide}></GuidePreview>)}
                </section>
            </React.Fragment>
        )
    }
}
const mappropsToProps = (state) => {

    return {
        guides: state.guides.guides,
        isLoading: state.system.isLoading,
    }
}

const mapDispatchToProps = {
    loadGuides
}
export default connect(
    mappropsToProps,
    mapDispatchToProps
)(FilteredGuideList)