import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { Card, Icon, Image } from 'semantic-ui-react'


import GuidePreview from '../cmps/GuidePreview.js'
import { loadGuides } from '../reducers/guide/actionGuide.js'
import MainSearch from '../cmps/MainSearch.js'
import Loading from '../cmps/Loading.js'
import Navbar from '../cmps/Navbar.js'

class GuideListFiltered extends Component {
    state = {
        filterGuides: [],
        cityImg: {

            barcelona: 'https://res.cloudinary.com/dtwqtpteb/image/upload/v1579885051/w89cx7ymcgp8aopjgp65.jpg',
            'tel-aviv':'https://res.cloudinary.com/dtwqtpteb/image/upload/v1579885048/oevosllc1iala4gz1n2s.jpg',
            'mexico-city':'https://res.cloudinary.com/dtwqtpteb/image/upload/v1579885052/xujbol455dfsibimzctv.jpg'

        }
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
        const headerStyle = {
            backgroundImage: `url(${this.state.cityImg[this.props.guides[0].city]})`,
            height: '80vh',
            objecFit: 'cover',
            marginBottom: ' 10px',
            backgroundRepeat: ' no-repeat',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: ' #7c9eab',
            backgroundBlendMode: 'multiply',
            backgroundAttachment: 'fixed'
        }


        return (
            <div>
                {/* <Image   src={this.state.cityImg['barcelona']} size={'large'}> </Image > */}
                <div>
                    <Navbar  ></Navbar>
                    <div style={headerStyle} className="header-filter"></div>

                </div>


                <h1 className="filtered-guides-header space">{this.props.guides[0].city + '\'s guides'}</h1>
                <h2 className="guides-short-content space">Find your guides, let them share with you the insight on the city.  Enjoy from unforgatable trip</h2>
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
)(GuideListFiltered)