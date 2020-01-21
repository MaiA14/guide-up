import React, { Component } from 'react'
import { connect } from 'react-redux'
import quoryString from 'query-string'

import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch'




class GuideListFiltered extends Component {
    state = {

        filterGuides: [],
        city: ''
    }

    componentDidMount() {
        const items = quoryString.parse(this.props.location.search)
        const city = items.city
        this.props.loadGuides(city);

    }
    onSearch = (city) => {
        
        this.props.loadGuides(city);

    }



    // componentWillReceiveProps(newProps) {
    //     const items = quoryString.parse(newProps.location.search)
    //     const city = items.city
    //     this.props.loadGuides(city);
    // }




    render() {
        const selectStyle = {
            border: '1px solid rgb(54, 71, 153)'
        }
    if (!this.props.guides.length) return <div>ell</div>

            
        return (
            <div>
                <h1 className="filtered-guides-header space">{ this.props.guides[0].city +'\'s guides'}</h1>
                <h2 className="guides-short-content space">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
                <div className="filtered-glist-container">

                    <MainSearch onSearch={this.onSearch} style={selectStyle} ></MainSearch>

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
)(GuideListFiltered)